class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
    	t.string :restaurant_name

      t.timestamps
    end
  end
end
