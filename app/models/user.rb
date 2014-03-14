class User < ActiveRecord::Base
	attr_accessor :record
	has_many :errands


	def self.get_latest_errands(id)
		@user = User.find(id)
		@group =  User.where(:group_name => @user.group_name)
		@rec = []
		@group.each do |k|
			@re = k.errands.where(:privy => false)
			@re.each do |p|
				p.updated_at = p.updated_at.to_datetime
				@rec.push(p)
			end
		end
		@user.record = @rec
		@user
	end
end
