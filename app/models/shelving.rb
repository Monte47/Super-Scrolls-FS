class Shelving < ApplicationRecord
  validates :book_id, :bookshelf_id, presence: true

  belongs_to :bookshelf
  belongs_to :book
end
