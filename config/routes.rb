Wday::Application.routes.draw do
  root :to => "static_pages#root"

  resources :posts, :only => [:index, :destroy, :create, :update]
end
