class GroupsController < ApplicationController
  def index
  	render json: Group.select(:id,:name)
  end
end
