class Order < ActiveRecord::Base
  validates :restaurant_name, presence: true
end