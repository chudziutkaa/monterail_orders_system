class Meal < ActiveRecord::Base
	belongs_to :order
end