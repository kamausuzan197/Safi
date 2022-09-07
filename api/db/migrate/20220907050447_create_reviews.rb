class CreateReviews < ActiveRecord::Migration[6.1]
  def change
  create_table :reviews do |t|
    t.string :comment
    t.integer :ordernumber
    t.integer :laundry_id
    t.integer :user_id
  end
  end
end
