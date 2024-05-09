import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/19896879/pexels-photo-19896879/free-photo-of-harbor-in-stockholm-sweden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/21733725/pexels-photo-21733725/free-photo-of-a-woman-taking-a-picture-of-the-water-from-a-boat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="info">
          <span> John</span>
          <p>Posted 2days ago</p>
        </div>
        <div className="edit">
          <Link to={`write?edit=2`}>
          </Link>
          <img src={Edit} alt="" />
          <img src={Delete} alt="" />
        </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  )
}

export default Single