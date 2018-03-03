class CommentsController < ApplicationController
  before_action :set_prototype

  def new
  end

  def create
    @comment = @prototype.comments.new(comment_params)
    redirect_to prototype_path(@prototype)
  end

  private

  def comment_params
    params.require(:comment).permit(:comment).merge(user_id: current_user.id)
  end

  def set_prototype
    @prototype = Prototype.find(params[:prototype_id])
  end

end
