class CreateReviews < ActiveRecord::Migration[6.1]
  def change
  create_table :review do |t|
    t.string :comment
    t.integer :ordernumber
  end
  end
end
