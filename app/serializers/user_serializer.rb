class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :errands
  embed :ids, include: true 
end
