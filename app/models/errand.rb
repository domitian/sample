class Errand < ActiveRecord::Base
	belongs_to :user
	store :location, accessors: [:latitude, :longitude], coder: JSON
	store :description, coder: JSON
end
