class CreateErrands < ActiveRecord::Migration
  def change
    create_table :errands do |t|
      t.integer :user_id
      t.string :title

      t.timestamps
    end
  end
end
