class User < ActiveRecord::Base
	attr_accessor :record, :approval_list, :location_set
	has_many :errands
	validates :email, uniqueness: {case_sensitive: false}
	belongs_to :group
	store :location, accessors: [:latitude, :longitude], coder: JSON
	def self.get_latest_errands(id,set_location)
		@user = User.find(id)
		if @user.is_approved == true

			@group = Group.find(@user.group_id)
			@user_list = @group.users.select('name,id,group_id,is_approved')
			puts "#{@user_list}"
			@user.approval_list = @user_list
			@group =  User.where(:group_id => @user.group_id)
			@group = @group.where.not(id: id)
			@rec = []
			@group.each do |k|
				@re = k.errands.order("updated_at DESC").where(:privy => false)
				@re.each do |p|
					@rec.push(p)
				end
			end
			@user.errands.each do |k|  #must load location errand when no of errands is too large
				@rec.push(k)
			end
			@user.record = @rec.sort_by &:updated_at
		end
		@user.location_set = set_location
		puts "#{@user.location_set}"
		# @user.group_id = nil #making ember think groupid is null
		@user
	end

	# def self.get_pending_approval_list(id)
	# 	@user = User.find(id)
	# 	@group = Group.find(@user.group_id)
	# 	@user_list = @group.users.select('name,id,group_id')
	# 	return  @user_list.where(:is_approved => false)
	# end
end
