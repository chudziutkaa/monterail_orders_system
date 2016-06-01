class AddOrdersToMeals < ActiveRecord::Migration
  def change
    add_reference :meals, :order, index: true
    add_foreign_key :meals, :orders
  end
end
