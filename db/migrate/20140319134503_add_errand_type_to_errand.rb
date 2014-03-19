class AddErrandTypeToErrand < ActiveRecord::Migration
  def change
    add_column :errands, :errand_type, :integer
  end
end
