class GistsController < ApplicationController
  def index
    @gists = current_user.gists.includes(:favorites)
    render json: @gists.to_json(include: :favorites)
  end
end
