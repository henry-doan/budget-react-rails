Rails.application.routes.draw do
  root 'home#index'

  namespace :api, defaults: { format: :json } do
  	resources :boards, except: [:new, :edit]
  end
 

  get '*unmatched_route', to: 'home#index'
end
