class AddGroupIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :group_id, :integer
    add_column :users, :group_name, :string
  end
end
