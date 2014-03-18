class Group < ActiveRecord::Base
	has_many :users
	attr_accessor :grouplist
	def self.get_group_list
		@group = Group.first
		@group.grouplist = Group.select(:name)
		@group
	end
end
