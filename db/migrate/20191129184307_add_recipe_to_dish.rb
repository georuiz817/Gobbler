class AddRecipeToDish < ActiveRecord::Migration[6.0]
  def change
    add_column :dishes, :recipe, :text
  end
end
