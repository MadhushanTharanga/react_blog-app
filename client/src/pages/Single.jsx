import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/19896879/pexels-photo-19896879/free-photo-of-harbor-in-stockholm-sweden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/21733725/pexels-photo-21733725/free-photo-of-a-woman-taking-a-picture-of-the-water-from-a-boat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <div className="info">
            <span> John</span>
            <p>Posted 2days ago</p>
          </div>
          <div className="edit">
            <Link to={`write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, modi ab
          v eniam dolores qui repudia ndae facilis maxime ratione fugit? Magni
          officia possimus aliquam vel, sequi est eos atque placeat magnam?
          Lorem, ipsum dolor sit amet consectetur adipisicing <br />
          <br /> elit. Odit, facilis nostrum, magni excepturi eos sapiente
          repudia ndae voluptates porro atque provident eligendi quidem, corpori
          vitae eum aperiam quae necessitatibus labore optio. Aliquid animi
          omnis, maiores sint eum tempora nihil? Odio reiciendis sed ipsa cum,
          mollitia <br />
          <br /> aliquam eligendi corporis perferendis optio accusantium cumque
          rem cupiditate nulla libero magnam beatae vitae facere debitis?
          Consequatur nam magni odit? Accusamus exercitationem iusto iure
          molestiae amet dolore nemo non sit necessitatibus possimus fugit
          consequuntur tempora, soluta id, doloremque , praesentium illum
          expedita maxime reprehenderit maiores deserunt! Iusto. Aspernatur
          asperiores rerum nulla officia hic, laboriosam velit eaque delectus
          magnam,<br />
          <br /> consequatur atque maiores quidem dolorem ullam vel ducimus
          eius aliquid earum voluptatum explicabo praesentium voluptates in?
          Dicta, aut minima. Facere quaerat odio consequatur similique soluta
          assumenda dolor rem illo nemo rerum repudiandae, laborum modi
          cupiditate culpa ipsa. Non voluptates et beatae doloribus tempora
          maiores ut illo numquam? Quisquam, reprehenderit! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Ipsum animi sunt distinctio
          accusantium culpa dolor officia repellat. Obcaecati repudiandae at
          magnam rem mollitia autem, quidem, distinctio, optio possimus
          perferendis iste. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Possimus sunt distinctio beatae porro soluta odio voluptatibus,
          accusamus quibusdam cupiditate veritatis quia, incidunt, suscipit
          numquam necessitatibus. Suscipit provident itaque dignissimos quis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptatum obcaecati error eos minima praesentium harum vitae
          explicabo aspernatur aliquam dolorum quis nostrum necessitatibus
          repellendus quas laudantium, mollitia incidunt corrupti!
        </p>
      </div>
      <div className="menu">m</div>
    </div>
  );
}

export default Single;
