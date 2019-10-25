class CallbacksController < Devise::OmniauthCallbacksController

  def gitlab
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in @user
    time_traveler = TimeTraveler
      .find_by(email: @user.email)
      .try(:authenticate, @user.uid)
    if !time_traveler
        time_traveler = TimeTraveler.create(
        email: @user.email,
        password: @user.uid,
        password_confirmation: @user.uid,
      )
    end
    if time_traveler
      session[:time_traveler_id] = time_traveler.id
    end
    redirect_to 'http://localhost:3000'
  end
end