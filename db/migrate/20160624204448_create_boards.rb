class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
    	t.string :category
    	t.string :sub_category
    	t.float :money_value

      t.timestamps null: false
    end
  end
end
