import React from 'react';

function Modal({onClose, currentPhoto}) {
    const {name, category, description, index} = currentPhoto;

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>Photo Name</h3>
                <img src={process.env.PUBLIC_URL + `/assets/small/${category}/${index}.jpg`} alt='current category' />
                <p>
                    {description}
                </p>
                <button onClick={onClose} type='button'>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;