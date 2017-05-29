# frozen_string_literal: true

require 'bundler/gem_tasks'
require 'rspec/core/rake_task'

desc 'Update timeago.js assets to the latest npm release'
task :update do # rubocop:disable Metrics/BlockLength
  require 'net/http'
  require 'uri'
  fetch = lambda do |url|
    uri = URI.parse(url)
    response = Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
      http.request(Net::HTTP::Get.new(uri.path, 'User-Agent' => 'Ruby'))
    end
    case response
    when Net::HTTPSuccess
      response.body
    when Net::HTTPRedirection
      # unpkg.com returns a relative URL in the `location` field.
      location = uri.clone
      location.path = URI.parse(response['location']).path
      location
    else
      response.error!
    end
  end
  remote_root = fetch['https://unpkg.com/timeago.js']
  File.write File.join('assets/javascripts/timeago.js'),
             fetch["#{remote_root}/dist/timeago.js"]
  fetch["#{remote_root}/locales/locales.js"]
    .scan(/['"]([a-zA-Z_]+)['"]\s*,?\s*/).flatten(1).each do |locale|
    File.write File.join('assets/javascripts/timeago/locales', "#{locale}.js"),
               fetch["#{remote_root}/locales/#{locale}.js"]
  end

  version_path = File.join('lib/timeago_js/version.rb')
  File.write version_path,
             File.read(version_path)
                 .sub(/VERSION = '.*?'/,
                      "VERSION = '#{remote_root.path.split('@')[-1]}'")

  STDERR.puts "Updated from #{remote_root}"
end

RSpec::Core::RakeTask.new(:spec)

task default: :spec
