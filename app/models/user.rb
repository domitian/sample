class User < ActiveRecord::Base
	attr_accessor :record
	has_many :errands

	belongs_to :group
	def self.get_latest_errands(id)
		@user = User.find(id)
		@group =  User.where(:group_id => @user.group_id)
		@group = @group.where.not(id: id)
		@rec = []
		@group.each do |k|
			@re = k.errands.where(:privy => false)
			@re.each do |p|
				@rec.push(p)
			end
		end
		@user.errands.each do |k|
			@rec.push(k)
		end
		@user.record = @rec.sort_by &:updated_at
		@user
	end
end
