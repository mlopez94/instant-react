import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Budget Tracker",
      category: "all",
      description:
        "AS AN avid traveler I WANT to be able to track my withdrawals and deposits with or without a data/internet connection SO THAT my account balance is accurate when I am traveling",
      repoLink: "https://github.com/mlopez94/save-dat-money",
      siteLink: "https://immense-coast-36352.herokuapp.com/",
    },
    {
      name: "nosql-nocry",
      category: "all",
      description:
        "AS A social media startup WANT an API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data",
      repoLink: "https://github.com/mlopez94/nosql-nocry",
      siteLink: "https://github.com/mlopez94/nosql-nocry",
    },
    {
      name: "The Tech Blog",
      category: "all",
      description:
        "AS A developer who writes about tech I WANT a CMS-style blog site SO THAT I can publish articles, blog posts, and my thoughts and opinions",
        repoLink: 'https://github.com/mlopez94/lopeml-14',
        siteLink: 'https://murmuring-cliffs-54748.herokuapp.com/',
    },
    {
      name: "Travilon",
      category: "all",
      description:
        "To make travel planning easier by encorporating air-travel recommendations, weather for your destination, and personalized travel itinerary",
        repoLink: 'https://github.com/mlopez94/rp1',
        siteLink: 'https://mlopez94.github.io/rp1/',
    },
    {
      name: "Weather Dashboard",
      category: "all",
      description:
        "This app displays the weather for a city entered in the input field followed by a five day foreceast",
        repoLink: 'https://github.com/mlopez94/weather-dashboard',
        siteLink: 'https://github.com/mlopez94/weather-dashboard',
    },
    {
      name: "Who Am I?",
      category: "all",
      description:
        "A Node.js application that takes information from the input on cmd line and dynamically creates cards for each team member",
        repoLink: 'https://github.com/mlopez94/who-am-i',
        siteLink: 'https://www.youtube.com/watch?v=XjSM_1EjsJ0',
    },
  ]);

  // const currentPhotos = photos.filter((photo) => photo.category === category);

  const currentPhotos = photos.filter((photo) => photo.category === "all");

  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/projects/all/${i}.PNG`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
