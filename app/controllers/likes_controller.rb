class LikesController < ApplicationController

  def create
    @like = Like.create(user_id: current_user.id, prototype_id: params[:prototype_id])
    @likes = Like.where(tweet_id: params[:tweet_id])
    @prototypes = Prototype.all
    @prototype = Prototype.find(params[:prototype_id])

    respond_to do |format|
      format.html
      format.js
    end
  end

  def destroy
    like = Like.find_by(user_id: current_user.id, prototype_id: params[:prototype_id])
    like.destroy
    @like = Like.where(prototype_id: params[:prototype_id])
    @prototypes = Prototype.all
    @prototype = Prototype.find(params[:prototype_id])

    respond_to do |format|
      format.html
      format.js
    end

  end
end
