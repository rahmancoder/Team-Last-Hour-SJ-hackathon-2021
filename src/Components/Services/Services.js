import React, { useEffect, useState } from "react";
import Allcourses from "../Allcourses/Allcourses";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [allcourse, setAllcourse] = useState([]);
  useEffect(() => {
    fetch("./mustafizeducation.json")
      .then((res) => res.json())
      // .then(data => console.log(data));
      .then((data) => setAllcourse(data));
  }, []);

  const handleAddToCart = (product) => {};

  return (
    <div id="services">
      <h1 style={{ padding: "40px", fontWeight: "bold" }}>Our Courses</h1>

      <div className=" justify-center row m-3">
        {/* passing props to Allcourse component */}

        {allcourse.slice(0, 10).map((mustafiz) => (
          <Allcourses
            key={mustafiz.index}
            mustafiz={mustafiz}
            handleAddToCart={handleAddToCart}
          ></Allcourses>
        ))}
      </div>

      {/* <Link to="/allcourses">
        <Button variant="warning">View all Course </Button>
      </Link> */}
      
    </div>
  );
};

export default Services;
