import React from 'react'
import {FaLocationArrow} from 'react-icons/fa'


const Wind = () => {
  return (
    <section className="section wind">
        <h1 className="section-header header">
            Wind status
        </h1>
        <p className='section-data'>
            <span className="lg">7</span>mph
        </p>
        <p className="section-data-img img-wind">
            <span className="icon-bg rotate">
                <FaLocationArrow className='icon'/>
            </span>
            WSW
        </p>
    </section>
  )
}

export default Wind