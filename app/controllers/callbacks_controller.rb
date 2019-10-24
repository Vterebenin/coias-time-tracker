class CallbacksController < Devise::OmniauthCallbacksController

  def gitlab
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in @user
    puts @user.as_json(:auth_token=>@user.authenticatable_salt, :email=>@user.email)
    redirect_to 'http://localhost:3000'
  end
end