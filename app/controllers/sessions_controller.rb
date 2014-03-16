class SessionsController < ApplicationController
  	# before_action :check_for_session, except: [:create]
	skip_before_filter :check_for_session, :only => :create
  def create
  	info = request.env['omniauth.auth'].extra.raw_info
  	if info['hd'] != 'elitmus.com'
  		redirect_to :controller => 'home', :action => 'index'
  	else

  		@user = User.find_by_email(info['email'])
  		session[:email] = info['email']
  		session[:name] = info['name']
  		if @user == nil
  			puts "i am inside nil user"
  			# @user = User.new(name: info['name'], email: info['email'])
  			# session[:id] = @user.id
  			redirect_to '/#signup'
  		elsif @user.group_id == nil
  			puts "i am inside nil groupid"
  			redirect_to '#signup'
  		else
  			session[:id] = @user.id
  			session[:group_id] = @user.group_id
  			redirect_to '/#/user/' + @user.id.to_s
  		end

  	end

  end


end
