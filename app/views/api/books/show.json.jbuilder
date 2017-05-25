json.extract! @book, :id, :title, :author, :description, :image_url, :reviews, :bookshelves, :likes

json.liked @book.liked?(current_user)
