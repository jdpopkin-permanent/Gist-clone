class FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(user_id: current_user.id, gist_id: params[:gist_id])

    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors
    end
  end

  def destroy
    @favorite = Favorite.find_by_user_id_and_gist_id(current_user.id, params[:gist_id])

    if @favorite
      @favorite.destroy
      head :ok
    else
      head 404
    end
  end

  def index
    @favorites = current_user.favorites

    render json: @favorites
  end
end
