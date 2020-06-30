Rails.application.routes.draw do
  root to: "pages#root"
  namespace :api, defaults: {format: :json} do
  resources :users, only:[:create, :index]
  resource :session, only:[:create, :destroy, :show]
  resources :stories, only:[:index, :show, :create, :update, :destroy]
  resources :claps, only:[:create, :destroy]
   end
  
end
