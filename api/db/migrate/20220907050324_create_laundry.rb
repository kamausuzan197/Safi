class CreateLaundry < ActiveRecord::Migration[6.1]
  def change
    create_table :laundries do |t|
      t.string :name
      t.string :variety
      t.integer :price
    end
  end
end
