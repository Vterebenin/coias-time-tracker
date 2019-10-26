class CallbacksController < Devise::OmniauthCallbacksController

  def gitlab
    @user = User.from_omniauth(request.env["omniauth.auth"])
    # sign_in @user
    if @user
      session[:user_id] = @user.id
    end
    redirect_to 'http://localhost:3000'
  end
end