class ErrandsController < ApplicationController
  def create

  	render json: Errand.create(get_params)
  end

  private
  	def get_params
  		params.require(:errand).permit(:title,:user_id,{:description => [:attributes => [:label,:value]]} ,:privy,{:location => [:latitude,:longitude]},:tag,:errand_type)
  	
  	end
end
