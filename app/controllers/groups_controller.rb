class GroupsController < ApplicationController
  skip_before_filter :check_for_session, :only => :index
  def index
  	render json: Group.select(:id,:name)
  end
end
