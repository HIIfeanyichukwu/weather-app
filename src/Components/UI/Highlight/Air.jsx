import React from 'react'

const Air = ({pres}) => {
  return (
    <section className="section air">
        <h1 className="section-header header">
            Air Pressure
        </h1>
        <p className='section-data'>
            <span className="lg">{pres}</span>mb
        </p>
    </section>
  )
}

export default Air