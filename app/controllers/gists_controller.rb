class GistsController < ApplicationController
  def index
    @gists = current_user.gists
    render json: @gists
  end
end
