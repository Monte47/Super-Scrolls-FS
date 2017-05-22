class Shelving < ApplicationRecord
  validates :book_id, :bookshelf_id, presence: true
  validates :book_id, uniqueness: { scope: :bookshelf_id }


  belongs_to :bookshelf
  belongs_to :book
end
