class User < ActiveRecord::Base
	attr_accessor :record, :approval_list
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

	def self.get_pending_approval_list(id)
		@user = User.find(id)
		@group = Group.find(@user.group_id)
		@user_list = @group.users.select('name,id,group_id')
		@user.approval_list = @user_list.where(:is_approved => nil)
		return @user
	end
end
