import React from "react";
import "./Home.css"
import HomeLayout from "../components/homelayout"
const Home = () => {
    return (
        <HomeLayout>
            <div className="home-bg">

              <h1> RWANDA BOOKING TOURS</h1>
                <div className="qoute-div">
                    <h2> Book Tour with Us</h2>
                    <p>Lorem Ipsum Excepteur consequat officia enim est id mollit aliqua</p>
                    <button class="button"><a href="#">Book Now!</a></button>
                </div>
              
    </div>

        </HomeLayout>

    )
}
export default Home