class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/authors" do
    authors = Author.all
    authors.to_json
  end
   get "/posts" do
    posts = Post.all
    posts.to_json
    
  end
  get "/comments" do
    comments = Comment.all
    comments.to_json
  end

end

