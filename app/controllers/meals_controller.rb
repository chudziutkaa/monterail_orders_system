class MealsController < ApplicationController
  def create
    order = Order.find(params[:order_id])
    meal = order.meals.create(meal_params)
    respond_with order, meal
  end

  private

  def meal_params
    params.require(:meal).permit(:name, :price)
  end
end
