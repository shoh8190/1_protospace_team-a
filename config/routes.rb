Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

  resources :prototypes do
    resources :likes, only: [:create,:destroy]
    resources :comments, only: [:new, :create, :edit, :update, :destroy]

    collection do
      get 'newest'
    end
  end
  resources :users, only: [:show, :edit, :update]
end
