require 'capybara'
require 'capybara/cucumber'
require 'selenium-webdriver'
require 'site_prism'
require 'pry'
require 'json'
require 'faker'
require 'active_support/core_ext/string'
require 'rest-client'
require 'require_all'
require 'oauth2'
require 'rspec'
require 'rspec/wait'


Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Capybara.default_driver = :selenium
Capybara.app_host = 'http://localhost:3000'
# Capybara.app_host = 'http://live-weblet-asa.mendeley.com'
Capybara.ignore_hidden_elements = false
