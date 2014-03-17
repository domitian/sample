class UsersController < ApplicationController
skip_before_filter :check_for_session, :only => :create
  def index
  	render json: User.all
  end

  def show
  	render json: User.get_latest_errands(params[:id])
  end

  def create
  	@user = User.create(name: session[:name],group_id: params[:user][:group_name].to_i,email: session[:email])
  	session[:group_id] = @user.group_id
    flash[:just_signed_up] = 'Congrats, you can now start sharing your information with your group'
  	render json: @user
  end
  private
  	def get_params
  		params.require(:user).permit(:group_id,:name,:email)
  	end
end
