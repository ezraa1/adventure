puts "🌱 Seeding spices..."

# Authors seeding
author1 = Author.create(name: "Austin")
author2 = Author.create(name: "John")
author3 = Author.create(name: "Rashid")
author4 = Author.create(name: "joe")
author5 = Author.create(name: "gregory")

# Posts seeding
post1 = Post.create(date: "19-9-2022", title:" How to enjoy your trip to Havasu without a tour guide", content:"The first thing you are going to want to do is pick dates and then pick back up dates and then pick some more back up dates and so on and so forth.", author_id: author1.id, image:"https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
post2 = Post.create(date: "11-9-2022", title:" The Tour From Hell! Our trip to Thomsons Falls", content:"It actually started out really well. We woke up and had a nice breakfast and then began our hike to what I think was more than amazing than Thomsons, Mooney Falls.", author_id: author2.id, image:"https://images.unsplash.com/photo-1501761095094-94d36f57edbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWR2ZW50dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
post3 = Post.create(date: "22-9-2022", title:" Do You Believe In Ghosts?", content:"We arrived at the Cliffs around 12:30am and started our ten minute walk down to my favorite spot at the Cliffs.", author_id: author3.id, image:"https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFkdmVudHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
post4 = Post.create(date: "5-9-2022", title:" Night Photography: Tips and Tricks", content:"You really need a camera that is capable of taking a long exposure. These days some phones can do that. I don’t know how well long exposures on phones turn out as I have never personally experimented with it.", author_id: author4.id, image:"https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFkdmVudHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
post5 = Post.create(date: "30-9-2022", title:" Travel Because it is fun!", content:"Adventure with us on our ten day road trip through Norway! Set aside twenty minutes, maybe next time you're on the toilet and watch it because you will not want to miss it for the scenery alone.", author_id: author5.id, image:"https://images.unsplash.com/photo-1616005888545-43de8d5b5997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGFkdmVudHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")

# Comment seeding
comment1 = Comment.create(text: "Amazing!", post_id: post1.id)
comment2 = Comment.create(text: "Joining!", post_id: post2.id)
comment3 = Comment.create(text: "This is awesome!", post_id: post3.id)
comment4 = Comment.create(text: "I fear this!", post_id: post4.id)
comment5 = Comment.create(text: "I like fun too!", post_id: post5.id)

puts "✅ Done seeding!"
