class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  validates :title, :user_id, presence: true

  belongs_to :user, class_name: "User", primary_key: :id, foreign_key: :user_id
end
