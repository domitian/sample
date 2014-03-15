class ErrandsController < ApplicationController
  def create
  	render json: Errand.create(get_params)
  end

  private
  	def get_params
  		params.require(:errand).permit(:title,:user_id,:description,:privy,:location,:tags)
  	end
end
