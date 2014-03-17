class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :record, :group_name, :group_id, :is_approved, :approval_list, :approved_by
  has_many :errands
  embed :ids, include: true 
end
