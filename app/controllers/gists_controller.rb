class GistsController < ApplicationController
  def index
    @gists = current_user.gists.includes(:favorites)
    render json: @gists.to_json(include: :favorites)
  end

  def create
    @gist = Gist.new(params[:gist])
    @gist.user_id = current_user.id

    if @gist.save
      render json: @gist
    else
      render json: @gist.errors, status: 422
    end
  end
end
