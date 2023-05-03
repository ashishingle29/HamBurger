import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

function Home() {
  const picture =
    "https://robinsweb.net/monsterburger/wp-content/uploads/2023/03/burger_header@2x-1.png";
  return (
    <div className="constant">
      <Sidebar />
      <div className="container">
        <div className="home">
          <div className="content">
            <h1>Welcome to Hambuger</h1>
            <p>
              Hamburgers are a popular American fast food consisting of a beef
              patty served between two buns, typically topped with lettuce,
              tomato, cheese, and condiments. They are versatile and can be
              customized to individual preferences. Whether you're grabbing a
              quick bite on the go or enjoying a casual meal with friends,
              hamburgers are a delicious and satisfying choice.
            </p>
            <button>contact us</button>
          </div>
          <div className="logoPicture">
            <img src={picture} alt="Logo" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
