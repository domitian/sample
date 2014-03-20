class RemoveDescriptionFromErrand < ActiveRecord::Migration
  def change
    remove_column :errands, :description, :string
    add_column :errands, :description, :text
  end
end
