class Review < ApplicationRecord
  validates :user_id, :book_id, :body, presence: true

  belongs_to :user
  belongs_to :book
end
