json.extract! @bookshelf, :id, :name, :user_id

json.books do
  @bokshelf.books.each do |book|
    json.set! book.id do
      json.extract! book, :id, :title, :author, :description, :image_url
    end
  end
end
