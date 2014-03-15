class AddTagsToErrand < ActiveRecord::Migration
  def change
    add_column :errands, :tag, :string
  end
end
