import React, { useEffect, useState } from 'react';

export const Image = ({ title, largeImage, smallImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsZoomed(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        <button
          type='button'
          className='portfolio-trigger'
          title={title}
          onClick={() => {
            setIsOpen(true);
            setIsZoomed(false);
          }}
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className='img-responsive' alt={title} />
        </button>
      </div>

      {isOpen ? (
        <div className='portfolio-modal' onClick={handleClose}>
          <button
            type='button'
            className='portfolio-modal-close'
            onClick={handleClose}
            aria-label='Fechar imagem'
          >
            X
          </button>
          <div
            className='portfolio-modal-content'
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={largeImage}
              alt={title}
              className={`portfolio-modal-image${isZoomed ? ' portfolio-modal-image--zoomed' : ''}`}
              onClick={() => setIsZoomed((prev) => !prev)}
              title={isZoomed ? 'Clique para reduzir' : 'Clique para ampliar'}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};