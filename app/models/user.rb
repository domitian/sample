class User < ActiveRecord::Base
	has_many :errands
	attr_accessor :group_name
end
