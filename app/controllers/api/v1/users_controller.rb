class Api::V1::UsersController < ApplicationController
  def index
    @users = User.last

    render json: @users
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

  def user_params
    params.require(:user).permit(:name, :user_name, :biography, :phone, :email)
  end
end
