class Bookshelf < ApplicationRecord
  validates :name, :user_id, presence: true
  validates :name, uniqueness: { scope: :user_id }

  belongs_to :user
  has_many :shelvings, dependent: :destroy
  has_many :books, through: :shelvings

end
