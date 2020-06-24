Rails.application.routes.draw do
  root to: 'pages#index'
  resources :users, only:[:create, :index]
  resources :session, only:[:create, :destroy]
  resources :stories, only:[:index, :show, :create, :update, :destroy]
  resources :claps, only:[:create, :destroy]
end
