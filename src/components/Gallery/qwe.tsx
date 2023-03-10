import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
// import './wsp-gallery.scss'
import './qwe.scss'

import { ImageList, ImageListItem } from '@mui/material'


const WSPGallery = ({ galleryImages }: any) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index: any) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }


    return (
        <div className='gallery'>
            {openModal &&
                <div className='sliderWrap'>
                    <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={galleryImages[slideNumber]} alt='' />
                    </div>
                </div>
            }
            <div className='wer'>
                {galleryImages && galleryImages.map((item: any, index: any) => {
                    return (
                        <div className="pics" key={index}>
                            <img src={item} onClick={() => handleOpenModal(index)} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WSPGallery