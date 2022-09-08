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

  post "/posts" do
    post= Post.create(
      date: params[:date],
      title: params[:title],
      content: params[:content],
      author_id: params[:author_id]
    )


end
  get "/comments" do
    comments = Comment.all
    comments.to_json
  end

end

