class Book < ApplicationRecord
  validates :title, :author, :description, :image_url, presence: true
  validates :title, uniqueness: true

  has_many :shelvings, dependent: :destroy
  has_many :bookshelves, through: :shelvings
  has_many :reviews, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :users, through: :likes

  def liked?(user)
    self.users.include?(user)
  end

  def common_likes(book)
    total_likes = []

    book.likes.each do |like|
      other_likes = like.user.likes.reject{ |like| like.book.id == book.id }
      other_likes.each do |like|
        total_likes.push(like)
      end
    end

    books_by_frequency = {}

    total_likes.each do |like|
      if books_by_frequency[like.book]
        books_by_frequency[like.book] += 1
      else
        books_by_frequency[like.book] = 1
      end
    end

    common_books = books_by_frequency.sort_by{ |k, v| v }
    common_books[0..2]
  end

end
