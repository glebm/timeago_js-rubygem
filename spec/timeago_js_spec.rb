# frozen_string_literal: true

require 'spec_helper'

RSpec.describe TimeagoJs do
  it 'has a version number' do
    expect(TimeagoJs::VERSION).not_to be nil
  end

  it 'has the assets' do
    expect(File).to exist('assets/javascripts/timeago.js')
    expect(File).to exist('assets/javascripts/timeago/locales/en.js')
    expect(File).to exist('assets/javascripts/timeago/locales/es.js')
  end
end
