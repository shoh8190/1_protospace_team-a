class CommentsController < ApplicationController
  before_action :set_prototype

  def new
  end

  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.html { redirect_to prototype_path(@prototype) }
      format.json
    end
  end

  def edit

  end

  def update
    comment = Comment.find(params[:id])
    comment.update(comment_params)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.user_id = current_user.id
      @comment.destroy
      render json: @comment
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:body).merge(prototype_id: params[:prototype_id], user_id: current_user.id)
  end

  def set_prototype
    @prototype = Prototype.find(params[:prototype_id])
  end

end
