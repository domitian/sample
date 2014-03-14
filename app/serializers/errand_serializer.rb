class ErrandSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :privy
end
