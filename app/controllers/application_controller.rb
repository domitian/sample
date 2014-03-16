class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
	before_action :check_for_session, except: [:logout]

  	def check_for_session
  		if session[:email].present?
  			puts "i have a session"
  		else
  			render :controller => 'home', :action => 'index'
  		end
  	end

  	def logout
  		[:email].each do |k|
  			session.delete k
  		end
  		render :controller => 'home', :action => 'index'
  	end
end
