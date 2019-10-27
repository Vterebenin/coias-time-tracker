Rails.application.routes.draw do
  devise_for :users, :controllers => {:omniauth_callbacks => 'callbacks', sessions: 'users/sessions'}
  devise_scope :user do
    get :logged_in, to: "user/sessions#logged_in"
    delete :logout, to: "user/sessions#logout"
  end

  get 'get_uid', to: 'time_trackers#getUserUid'

  resources :users do
    resources :time_trackers
  end


  resources :sessions, only: [:create]
  # delete :logout, to: "sessions#logout"
  # get :logged_in, to: "sessions#logged_in"
  resources :registrations, only: [:create]
  # root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
