class Review < ApplicationRecord
  validates :user_id, :book_id, :body, presence: true
  validates :user_id, uniqueness: { scope: :book_id }

  belongs_to :user
  belongs_to :book
end
