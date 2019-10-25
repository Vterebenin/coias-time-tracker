class SessionsController < ApplicationController
  include CurrentTimeTravelerConcern
  def create
    time_traveler = TimeTraveler
      .find_by(email: params["time_traveler"]["email"])
      .try(:authenticate, params["time_traveler"]["password"])

    if time_traveler
      session[:time_traveler_id] = time_traveler.id
      render json: {
        status: :created,
        logged_in: true,
        time_traveler: time_traveler
      }
    else
      render json: { status: 401 }
    end
  end

  def logged_in
    if @current_time_traveler
      render json: {
        logged_in: true,
        time_traveler: @current_time_traveler,
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def logout
    reset_session
    render json: {status: 200, logged_in: false}
  end
end