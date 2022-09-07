class Review < ActiveRecord::Base
    belongs_to  :laundry
    belongs_to  :user
end