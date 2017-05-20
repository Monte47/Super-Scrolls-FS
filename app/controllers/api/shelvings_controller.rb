class Api::ShelvingsController < ApplicationController

  def create
    @shelving = Shelving.new(shelving_params)
    if @shelving.save
      @book = Book.find(params[:shelve][:book_id])
      render 'api/books/show'
    else
      render json: @shelving.errors.full_messages, status: 422
    end
  end

  def destroy
    debugger
    @shelving = Shelving.find_by(book_id: shelving_params[:book_id], bookshelf_id: shelving_params[:bookshelf_id])
    @shelving.destroy
    render json: @shelving
  end

  def shelving_params
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end

end
