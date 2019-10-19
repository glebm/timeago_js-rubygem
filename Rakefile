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
  local_root  = 'assets/javascripts'
  remote_root = fetch['https://unpkg.com/timeago.js@3']
  File.write File.join(local_root, 'timeago.js'),
             fetch["#{remote_root}/dist/timeago.js"]
  File.write File.join(local_root, 'timeago.locales.js'),
             fetch["#{remote_root}/dist/timeago.locales.min.js"]

  process_locale_file = lambda do |locale, src|
    if src.start_with?('module.exports') && src.scan('function').size == 1
      src.sub(/module\.exports\s*=\s*(.*?)\s*;?\s*\z/m,
              "window.timeago.register('#{locale}', \\1)\n") || fail(locale)
    else
      <<~JS
        (function() {
        #{src.sub('module.exports', 'var _fn') || fail(locale)}
        window.timeago.register('#{locale}', _fn)
        })();
      JS
    end
  end
  fetch["#{remote_root}/locales/locales.js"]
    .scan(/['"]([a-zA-Z_]+)['"]\s*,?\s*/).flatten(1).each do |locale|
    File.write File.join(local_root, 'timeago', 'locales', "#{locale}.js"),
               process_locale_file[locale,
                                   fetch["#{remote_root}/locales/#{locale}.js"]]
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
