class MealsController < ApplicationController
  before_filter :authenticate_user!, only: [ :create ]

  def create
    order = Order.find(params[:order_id])
    meal = order.meals.create(meal_params.merge(user_id: current_user.id))
    respond_with order, meal
  end

  private

  def meal_params
    params.require(:meal).permit(:name, :price)
  end
end
