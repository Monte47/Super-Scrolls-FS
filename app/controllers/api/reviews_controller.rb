class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.includes(:user).where(book_id: params[:book_id]).order(created_at: :desc)
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(book_id: review_params[:book_id], user_id: current_user.id)
    @review.destroy
    render json: @review
  end

  def review_params
    params.require(:review).permit(:body, :book_id)
  end

end
