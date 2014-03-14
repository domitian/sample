class AddPrivyToErrand < ActiveRecord::Migration
  def change
    add_column :errands, :privy, :boolean
    add_column :errands, :location, :string
    add_column :errands, :description, :string
  end
end
