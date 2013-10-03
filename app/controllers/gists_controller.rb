class GistsController < ApplicationController
  def index
    @gists = current_user.gists.includes(:favorites, :gist_files)
    render json: @gists.to_json(include: [:favorites, :gist_files])
  end

  def create
    @gist = Gist.new(params[:gist])
    @gist.user_id = current_user.id


    if params[:gist_files]
      params[:gist_files].each do |gist_file_data|
        @gist.gist_files.build(gist_file_data)
      end
    end

    if @gist.save!
      render json: @gist
    else
      render json: @gist.errors, status: 422
    end
  end
end
