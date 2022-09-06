class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  # get "/" do
    # authors = Author.all
    # authors.to_json
   get "/comments" do
    # posts = Post.all
    # posts.to_json
    
  end

end

