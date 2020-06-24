class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    end
  end
end
