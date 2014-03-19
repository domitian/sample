class Errand < ActiveRecord::Base
	belongs_to :user
	store :location, accessors: [:latitude, :longitude]
end
