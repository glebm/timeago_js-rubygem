# frozen_string_literal: true

module TimeagoJs
  class Engine < ::Rails::Engine
    initializer 'timeago_js.assets' do |app|
      app.config.assets.paths << root.join('assets', 'javascripts').to_s
    end
  end
end
