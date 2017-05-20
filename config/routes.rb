Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show, :create, :update, :destroy]
    resources :bookshelves, only: [:index, :show, :create, :update, :destroy]
    resource :shelvings, only: [:create, :destroy]
  end

  root "static_pages#root"
end
