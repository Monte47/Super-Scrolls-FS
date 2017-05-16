class Book < ApplicationRecord
  validates :title, :author, :description, :image_url, presence: true
  validates :title, uniqueness: true
end
