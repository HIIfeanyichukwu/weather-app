import React from 'react'
import {FaLocationArrow} from 'react-icons/fa'


const Wind = ({windspeed}) => {

    const convertSpeed = (ms) => {
        let ans = ms * 2.23694;
        return ans.toFixed(1);
    }

  return (
    <section className="section wind">
        <h1 className="section-header header">
            Wind status
        </h1>
        <p className='section-data'>
            <span className="lg">{convertSpeed(windspeed)}</span>Mph
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