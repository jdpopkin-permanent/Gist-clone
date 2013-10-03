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

  def update
    @gist = Gist.find(params[:id])

    params[:gist_files].each do |gist_file_data|
      gist_file = GistFile.find(gist_file_data[:id])
      gist_file.update_attributes(name: gist_file_data[:name], body: gist_file_data[:body])
    end

    if @gist.update_attributes(params[:gist])
      render json: @gist.to_json(include: [:favorites, :gist_files])
    else
      render json: @gist.errors, status: 422
    end
  end
end
