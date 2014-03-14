class UsersController < ApplicationController
  def index
  	render json: User.all
  end

  def show
  	render json: User.get_latest_errands(params[:id])
  end
end
