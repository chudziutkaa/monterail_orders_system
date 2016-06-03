class Order < ActiveRecord::Base
  validates :restaurant_name, presence: true
  validates :status, presence: false
  validates :status, inclusion: { in: %w(ordered delivered finalized) }
  has_many :meals

  def as_json(options = {})
    super(options.merge(include: :meals))
  end

end
