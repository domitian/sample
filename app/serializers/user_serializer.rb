class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :record, :group_name, :group_id, :is_approved, :approval_list, :location, :approved_by,:location_set
  has_many :errands
  embed :ids, include: true 
end
