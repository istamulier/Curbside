class CreateClaps < ActiveRecord::Migration[5.2]
  def change
    create_table :claps do |t|
    t.integer "story_id", null: false
    t.integer "clapper_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["story_id"], name: "index_claps_on_story_id" 
    t.index ["clapper_id"], name: "index_claps_on_clapper_id" 
 
    end
  end
end
