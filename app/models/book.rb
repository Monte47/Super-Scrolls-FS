class Book < ApplicationRecord
  validates :title, :author, :description, :image_url, presence: true
  validates :title, uniqueness: true

  has_many :shelvings, dependant: :destroy
  has_many :bookshelves, through: :shelvings

end
