class CreateDishes < ActiveRecord::Migration[6.0]
  def change
    create_table :dishes do |t|
      t.string :main
      t.string :side_one
      t.string :side_two
      t.string :drink

      t.timestamps
    end
  end
end
