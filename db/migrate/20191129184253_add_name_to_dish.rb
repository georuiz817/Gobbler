class AddNameToDish < ActiveRecord::Migration[6.0]
  def change
    add_column :dishes, :name, :string
  end
end
