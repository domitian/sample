class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
	before_action :check_for_session, except: [:logout]

  	def check_for_session
  		if session[:group_id].present?
  			puts "i have a session"
  		else
  			redirect_to :controller => 'home', :action => 'index'
  		end
  	end

  	def logout
  		[:email,:name,:id,:group_id].each do |k|
  			session.delete k
  		end
      flash[:logout] = 'you have successfully logged out, please refresh the page'
  		redirect_to :controller => 'home', :action => 'index'
  	end
end
