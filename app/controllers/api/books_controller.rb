class Api::BooksController < ApplicationController

  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.find(params[:id])
    render :show
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def update
    @book = Book.find(params[:id])
    if @book.update_attributes(book_params)
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    render :index
  end

  def book_params
    params.require(:book).permit(:title, :author, :body, :description, :image_url)
  end

end
