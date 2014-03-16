class HomeController < ApplicationController
	skip_before_filter :check_for_session, :only => :index
	def index
		
	end
end
