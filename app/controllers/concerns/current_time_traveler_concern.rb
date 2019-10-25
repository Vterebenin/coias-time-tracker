module CurrentTimeTravelerConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_time_traveler
  end

  def set_current_time_traveler
    if session[:time_traveler_id]
      puts '123qwe'
      puts session[:time_traveler_id]
      @current_time_traveler = TimeTraveler.find(session[:time_traveler_id])
    end
  end
end