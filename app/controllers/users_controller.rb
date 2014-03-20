class UsersController < ApplicationController
skip_before_filter :check_for_session, :only => :create
  def index
  	render json: User.all
  end

  def show
    @location = false
    puts "locationcookie #{session[:location].inspect}"
    if (session[:location] == nil )
      @location = true
    end
    puts "#{@location}"
  	render json: User.get_latest_errands(params[:id],@location)
  end

  def create
    @groupid = params[:user][:group_name]
    @groupname = @groupid.split('?').first
    @groupid = @groupid.split('?').last.to_i
    if (@groupid == 0)
      @groupid = Group.create(name: @groupname)
      @groupid = @groupid.id
    end
  	@user = User.new(name: session[:name],group_id: @groupid,email: session[:email],is_approved: false,record: [])
  	session[:group_id] = @user.group_id
    if Group.find(session[:group_id]).users.count == 0
      @user.is_approved = true
      flash[:just_signed_up] = 'Congrats, you are the first one in this group, please share your group name with other members of your group'
    else
      flash[:just_signed_up] = 'Congrats, you joined this group, but you need to be approved by a group member to access the dashboard'
    end
    @user.save();
  	render json: @user
  end
  def update
    @params = get_params
    puts "#{@params.inspect}"
    @user = User.find(params[:id])
    if (@user.is_approved)
      @user.location = @params[:location]
      @user.save();
      session[:location]='there'
      render json: User.get_latest_errands(params[:id],false)

    else
      if User.find(@params[:approved_by]).group_id == @user.group_id
        @user.is_approved = @params[:is_approved]
        @user.approved_by = @params[:approved_by]
      end
      @user.save();
      render json: @user
    end

    puts " the groupid is #{@params.inspect}"
  end
  private
  	def get_params
  		params.require(:user).permit(:group_id,:name,:email,:is_approved,:approved_by,{:location => [:latitude,:longitude]})
  	end
end
