json.extract! @book, :id, :title, :author, :description, :image_url, :reviews, :bookshelves, :likes

json.liked @book.liked?(current_user)
json.common_books @book.common_likes
