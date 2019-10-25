class CreateTimeTravelers < ActiveRecord::Migration[6.0]
  def change
    create_table :time_travelers do |t|
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end