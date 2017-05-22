json.extract! @bookshelf, :id, :name, :user_id, :default_shelf

json.books do
  @bookshelf.books.each do |book|
    json.set! book.id do
      json.extract! book, :id, :title, :author, :description, :image_url
    end
  end
end
