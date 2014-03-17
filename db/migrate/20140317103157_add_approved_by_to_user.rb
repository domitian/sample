class AddApprovedByToUser < ActiveRecord::Migration
  def change
    add_column :users, :approved_by, :integer
  end
end
