import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Budget Tracker',
      category: 'all',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'nosql-nocry',
      category: 'all',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'The Tech Blog',
      category: 'all',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
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

  const currentPhotos = photos.filter((photo) => photo.category === category);

  

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
            src={require(`../../assets/projects/${category}/${i}.PNG`).default}
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
