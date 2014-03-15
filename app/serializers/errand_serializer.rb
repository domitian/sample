class ErrandSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :privy, :updated_at, :created_at, :tag
end
