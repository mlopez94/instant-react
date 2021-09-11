import React from 'react';


const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, repoLink, siteLink  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/projects/${category}/${index}.PNG`).default} alt="current category" />
        <p>
          {description}
        </p>
        
        <button type="button" onClick={onClose}>
          Close
        </button>
        
        {/* <button onClick={link}>Perform action</button> */}
        <a href={repoLink} className="link fab fa-github">github</a>
        <a href={siteLink} className="link fas fa-laptop-code">Site</a>
        
      </div>
    </div>
  );
};

export default Modal;