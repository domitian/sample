class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :record
  has_many :errands
  embed :ids, include: true 
end
