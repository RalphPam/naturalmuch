import React, {useState, useEffect} from 'react'

const Features = () => {

  const [style, setStyle] = useState({})

  const scrollHandler = (e) => {
    if(e.path[1].pageYOffset >= 200) {
      setStyle({animation: 'feature 1s ease-out forwards'})
      window.removeEventListener('scroll', () => console.log('Passed'))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', e => scrollHandler(e))
    return () => window.removeEventListener('scroll', () => console.log('Passed'))
  }, [])

  return (
    <section className='features'>
      <div style={style} className='feature'>
        <img src='https://i.ibb.co/QXjCt7r/Free-Delivery.png' alt='Free Delivery' />
        <h3 className='feature-name'>Free Delivery</h3>
      </div>
      <div style={style} className='feature'>
        <img src='https://i.ibb.co/WgY0xGX/Weekly-Discounts.png' alt='Weekly Discounts' />
        <h3 className='feature-name'>Weekly Discounts</h3>
      </div>
      <div style={style} className='feature'>
        <img src='https://i.ibb.co/C08fptW/Exclusive-Discounts.png' alt='Exclusive Products' />
        <h3 className='feature-name'>Exclusive Products</h3>
      </div>
    </section>
  )
}

export default Features
