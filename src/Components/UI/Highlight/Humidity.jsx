import React from 'react'

const Humidity = () => {
  return (
    <section className="section humidity">

        <h1 className="section-header header">
            Humidity
        </h1>
        <p className='section-data'>
            <span className="lg">84</span>%
        </p>
        <p className="section-data-img">
            <label className='range-label'>
                <span className="range-values">
                    <span>0</span> <span>50</span> <span>100</span>
                </span>
                <meter id="humid" className='meter' max="100" value="75" >Humid</meter>
                <span className="measure">%</span>
            </label>
        </p>

    </section>
  )
}

export default Humidity