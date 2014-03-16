class SessionsController < ApplicationController
  	# before_action :check_for_session, except: [:create]
	skip_before_filter :check_for_session, :only => :create
  def create
  	info = request.env['omniauth.auth'].extra.raw_info
  	if info['hd'] != 'elitmus.com'
  		render :controller => 'home', :action => 'index'
  	else
  		session[:email] = info['email']
  	end
  	# session[:email] = 
  	puts "#{info.inspect}"
  	redirect_to '/#/user/1'
  end


end
