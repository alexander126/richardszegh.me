import React from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

export default function ImageLightbox({ open, onClose, images }) {
  const [photoIndex, setPhotoIndex] = React.useState(0)

  const handlePrev = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length)
  }
  const handleNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length)
  }

  if (open && Array.isArray(images)) {
    return (
      <Lightbox
        onCloseRequest={onClose}
        onMovePrevRequest={handlePrev}
        onMoveNextRequest={handleNext}
        mainSrc={images[photoIndex]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        nextSrc={images[(photoIndex + 1) % images.length]}
      />
    )
  } else {
    return null
  }
}

ImageLightbox.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
