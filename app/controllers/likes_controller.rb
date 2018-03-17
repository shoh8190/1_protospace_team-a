class LikesController < ApplicationController
  def create
    @like = like.create(user_id: current_user.id, prototype_id: params[:prototype_id])
    @likes = like.where
    @prototypes = Prototype.all
  end

  def destroy
    like = like.find_by(user_id: current_user.id, prototype_id: params[:prototype_id])
    like.destroy
    @like = Like.where(prototype_id: params[:prototype_id])
    @prototypes = Prototype.all
  end
end
