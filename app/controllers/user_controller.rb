class UserController < ApplicationController
  def index
  end

  def show
  	render json: User.find(1)
  end
end
