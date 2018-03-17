class LikesController < ApplicationController
  def create
    @user = current_user.id
    @prototype = params[:prototype_id]
    likes = { user_id: @user, prototype_id: @prototype }
    @like = Like.new(likes)

    @like.save!
    if @like.save
      redirect_to user_path(@user)
    else
      redirect_to prototype_path
    end
  end
end
