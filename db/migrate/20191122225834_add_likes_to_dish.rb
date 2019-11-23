class AddLikesToDish < ActiveRecord::Migration[6.0]
  def change
    add_column :dishes, :likes, :integer
  end
end
