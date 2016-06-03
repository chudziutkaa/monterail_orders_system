class OrdersController < ApplicationController
  before_filter :authenticate_user!, only: [ :create, :show ]

  def index
    respond_with Order.all
  end

  def create
    respond_with Order.create(order_params)
  end

  def show
    respond_with Order.find(params[:id])
  end
  
  private

  def order_params
    params.require(:order).permit(:restaurant_name)
  end
end
