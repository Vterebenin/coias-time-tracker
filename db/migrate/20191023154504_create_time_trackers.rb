class CreateTimeTrackers < ActiveRecord::Migration[6.0]
  def change
    create_table :time_trackers do |t|
      t.float :time
      t.text :desc

      t.timestamps
    end
  end
end
