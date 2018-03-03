class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show ,:edit]

  def index
    @prototypes = Prototype.all
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      # redirect_to ({ :action => 'new' }), :alert => 'New prototype was unsuccessfully created'
      redirect_to new_prototype_path, alert: "New prototype was unsuccessfully created"
    end
  end

  def edit
    @is_main_record = @prototype.captured_images.where(status: 0)
    @is_sub_record = @prototype.captured_images.where(status: 1)
    @remain_record_count = 3 - @is_sub_record.length
  end

  def update
    prototype = Prototype.find(params[:id])
    if prototype.user_id == current_user.id
      if prototype.update(prototype_update_params)

        redirect_to :root, notice: 'Prototype was successfully updated'
      else
        redirect_to edit_prototype_path, alert: "Prototype was unsuccessfully updated"
      end
    end
  end

  def show
  end

  def destroy
    prototype = Prototype.find(params[:id])
    prototype.destroy
    redirect_to :root
  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :id,
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:content, :status]
    )
  end

  def prototype_update_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:id, :content, :status]
    )
  end
end
