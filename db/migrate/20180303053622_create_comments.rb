class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :comment
      t.references :user, foreign_key: true, index: true
      t.references :prototype, foreign_key: true, index: true
      t.timestamps null: false
    end
  end
end
