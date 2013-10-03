class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :name
  validates :gist, presence: true

  belongs_to :gist, inverse_of: :gist_files
end
