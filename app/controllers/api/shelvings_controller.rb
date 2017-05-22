class Api::ShelvingsController < ApplicationController

  def create
    @shelving = Shelving.new(shelving_params)
    if @shelving.save
      if @shelving.bookshelf.default_shelf
        all_shelvings = Shelving.includes(:bookshelf).where(book_id: @shelving.book_id)
        all_shelvings.each do |shelving|
          next if shelving.id == @shelving.id
          if shelving.bookshelf.default_shelf && current_user.id == shelving.bookshelf.user_id
            shelving.destroy
          end
        end
      end
      render json: @shelving.book
    else
      render json: @shelving.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelving = Shelving.find_by(book_id: shelving_params[:book_id], bookshelf_id: shelving_params[:bookshelf_id])
    @shelving.destroy
    render json: @shelving
  end

  def shelving_params
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end

end
