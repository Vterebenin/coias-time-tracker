class RegistrationsController < ApplicationController

  def create
    time_traveler = TimeTraveler.create!(
      email: params['time_traveler']['email']
      password: params['time_traveler']['password']
      password_confirmation: params['time_traveler']['password_confirmation']
    )
    if time_traveler
      session[:time_traveler_id] = time_traveler.id
      render json: {
        status: :created,
        time_traveler: time_traveler
      }
    else
      render json: {status: 500}
    end
  end
end
