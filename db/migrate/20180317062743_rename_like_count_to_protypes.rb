class RenameLikeCountToProtypes < ActiveRecord::Migration
  def change
    rename_column :prototypes, :like_count, :likes_count
  end
end
