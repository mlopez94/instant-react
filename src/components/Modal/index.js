import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, link  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/projects/${category}/${index}.PNG`).default} alt="current category" />
        <p>
          {description}
        </p>
        <p>{link}</p>
        <button type="button" onClick={onClose}>
          Close
        </button>
        <button type='button' className="fab fa-github">  Go to Site</button>
      </div>
    </div>
  );
};

export default Modal;