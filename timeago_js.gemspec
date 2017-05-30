# coding: utf-8
# frozen_string_literal: true

lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'timeago_js/version'

Gem::Specification.new do |spec|
  spec.name          = 'timeago_js'
  spec.version       = TimeagoJs::VERSION
  spec.authors       = ['Gleb Mazovetskiy']
  spec.email         = ['glex.spb@gmail.com']

  spec.summary       = 'http://timeago.org/ scripts packaged as a Ruby gem.'
  spec.description   = 'Out of the box, it works with Sprockets,' \
                       ' the Rails asset pipeline.'
  spec.homepage      = 'https://github.com/glebm/timeago_js-rubygem'
  spec.license       = 'MIT'

  spec.files         = Dir['{assets,lib}/**/*']
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundler', '~> 1.15'
  spec.add_development_dependency 'rake', '~> 10.0'
  spec.add_development_dependency 'rspec', '~> 3.0'
  spec.add_development_dependency 'rubocop'
end
