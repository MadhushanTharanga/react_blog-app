import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id:1,
      title: "Lorem ipsum dolor  quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img:"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:2,
      title: "Lorem  nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img: "https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img: "https://images.pexels.com/photos/52536/raspberry-fruits-fresh-red-52536.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:4,
      title: "Recusandae doloremque magni numquam, possimus debitis assumenda dolore culpa quos repellat!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img:"https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque magni numquam, ad perferendis nam totam quam voluptate consequatur, delectus quia libero! Voluptatibus possimus debitis assumenda dolore culpa quos repellat!",
      img:"https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) =>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
              <div className="content">
                <Link className = "link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
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