class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.last

    render json: @posts
  end

  def show
    @post = Post.last

    render json: @post
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      render json: { error: 'Erro ao criar post, tente novamente' }, status: 400
    end
  end

  def destroy
    @post = User.find(params[:id])

    if @post
      @post.destroy
      render json: { message: 'Post apagado com sucesso' }, status: 200
    else
      render json: { error: 'Falha ao apagar' }, status: 400
    end
  end

  private

  def post_params
    params.require(:post).permit(:text)
  end
end
