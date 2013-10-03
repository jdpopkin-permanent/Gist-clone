class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id
  validates :gist_id, :user_id, presence: true
  validates :gist_id, uniqueness: {scope: :user_id}

  belongs_to :gist
  belongs_to :user
end
