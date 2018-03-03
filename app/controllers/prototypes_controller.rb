class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show ,:edit]

  def index
    @prototypes = Prototype.all.page(params[:page]).per(8)
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
    @images = @prototype.captured_images
  end

  def update
    flag = 0
    prototype = prototype_update_params
    prototype[:captured_images_attributes].each_with_index do |image_array, index|
      image = image_array.pop
      if image.present?
        if image[:id].blank?
          new_image = CapturedImage.new
        else
          new_image = CapturedImage.find(image[:id])
        end
        if image[:content].present?
          new_image.prototype_id = params[:id]
          new_image.status = image['status']
          new_image.content = image['content']
          if new_image.save!
            flag = 1
          end
        end
      end
    end
    if flag != 1
      redirect_to :root, notice: 'Prototype was successfully updated'
    else
      redirect_to edit_prototype_path, alert: "Prototype was unsuccessfully updated"
    end
  end

  def show
    @comment = Comment.new
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
