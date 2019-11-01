class AddUserToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :user_id, :reference
  end
end
