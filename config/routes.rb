Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'

  get '*unmatched_route', to: 'home#index'
end
