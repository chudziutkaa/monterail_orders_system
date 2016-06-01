class Order < ActiveRecord::Base
  validates :restaurant_name, presence: true
  has_many :meals

  def as_json(options = {})
    super(options.merge(include: :meals))
  end

end