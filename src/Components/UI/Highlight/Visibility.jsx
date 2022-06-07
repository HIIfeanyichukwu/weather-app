import React from 'react'

const Visibility = ({visibility}) => {
  return (
    <section className="section visibility">
        <h1 className="section-header header">
            Visibility
        </h1>
        <p className='section-data'>
            <span className="lg">{visibility}</span>miles
        </p>
    </section>
  )
}

export default Visibility