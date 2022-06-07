import React from 'react'

const Humidity = ({humidity}) => {
  return (
    <section className="section humidity">

        <h1 className="section-header header">
            Humidity
        </h1>
        <p className='section-data'>
            <span className="lg">{humidity}</span>%
        </p>
        <p className="section-data-img">
            <label className='range-label'>
                <span className="range-values">
                    <span>0</span> <span>50</span> <span>100</span>
                </span>
                <meter id="humid" className='meter' max="100" value={humidity} >Humid</meter>
                <span className="measure">%</span>
            </label>
        </p>

    </section>
  )
}

export default Humidity