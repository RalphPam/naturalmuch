import React, {useState, useEffect} from 'react'

const Reviews = () => {
  const [style1, setStyle1] = useState({})
  const [style2, setStyle2] = useState({})
  const [style3, setStyle3] = useState({})

  const scrollHandler = (e) => {
    if(e.path[1].pageYOffset >= 1400) {
      setStyle1({animation:'review1 1s 0.5s ease-out forwards'})
      setStyle2({animation: 'review2 1s ease-out forwards'})
      setStyle3({animation: 'review3 1s 1s ease-out forwards'})
      window.removeEventListener('scroll', () => console.log('Passed'))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', e => scrollHandler(e))
    return () => window.removeEventListener('scroll', () => console.log('Passed'))
  }, [])

  return (
    <section className='reviews'>
      <h1>What Our Customers Are Saying</h1>
      <div style={style1} className='review-1'>
        <img src='https://i.ibb.co/3WFDXLf/Dawn.png' alt='Customer Review' />
      </div>
      <div style={style2} className='review-2'>
        <img src='https://i.ibb.co/7CrPMyr/Heather.png' alt='Customer Review' />
      </div>
      <div style={style3} className='review-3'>
        <img src='https://i.ibb.co/D7F7pbN/Zoila.png' alt='Customer Review' />
      </div>
    </section>
  )
}

export default Reviews
