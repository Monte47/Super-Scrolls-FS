class Api::BookshelvesController < ApplicationController

  def index
    @bookshelves = Bookshelf.includes(:books).all.where(user_id: current_user.id)
  end

  def show
    @bookshelf = Bookshelf.includes(:books).where(user_id: current_user.id).find(params[:id])
    render :show
  end

  def create
    @bookshelf = Bookshelf.new(user_id: current_user.id, name: bookshelf_params.name)
    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def update
    @bookshelf = Booshelf.find(params[:id])
    if @bookshelf.update_attributes(bookshelf_params)
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = Book.find(params[:id])
    if @bookshelf.destroy
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def bookshelf_params
    params.require(:bookshelf).permit(:name)
  end

end
