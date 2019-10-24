class AddUserToTimeTrackers < ActiveRecord::Migration[6.0]
  def change
    add_reference :time_trackers, :user, foreign_key: true
  end
end
