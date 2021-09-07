import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Budget Tracker',
      category: 'all',
      description: 'AS AN avid traveler I WANT to be able to track my withdrawals and deposits with or without a data/internet connection SO THAT my account balance is accurate when I am traveling',
    },
    {
      name: 'nosql-nocry',
      category: 'all',
      description: 'AS A social media startup WANT an API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data',
    },
    {
      name: 'The Tech Blog',
      category: 'all',
      description: 'AS A developer who writes about tech I WANT a CMS-style blog site SO THAT I can publish articles, blog posts, and my thoughts and opinions',
    },
    {
      name: 'Travilon',
      category: 'all',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Weather Dashboard',
      category: 'all',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Who Am I?',
      category: 'all',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    
  ]);

  // const currentPhotos = photos.filter((photo) => photo.category === category);

  const currentPhotos = photos.filter((photo) => photo.category === 'all');

  console.log(category);

  
  console.log(photos);

  
  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
    
  }

  return (
    
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            // src={require(`../../assets/small/${category}/${i}.jpg`)}
            src={require(`../../assets/projects/all/${i}.png`).default}
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
