import React from 'react'

const Home = () => {

  const posts = [
    {
      id:1,
      titlt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img:"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:2,
      titlt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img:"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:3,
      titlt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img:"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:4,
      titlt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img:"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:5,
      titlt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img:"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  return (
    <div>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
              <div className="content">
                <Link className="link" to={ `/post/${post.id}`}>
                  <h1>{posts.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home