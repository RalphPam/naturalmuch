import React, {useState, useEffect} from 'react'
import arrowLeft from '../assets/arrow_drop_down_circle-1.svg'
import arrowRight from '../assets/arrow_drop_down_circle-24px (1).svg'

const Blogs = () => {

  const [style, setStyle] = useState({})

  const scrollHandler = (e) => {
    if(e.path[1].pageYOffset >= 3300) {
      setStyle({animation: 'card 1s ease-out forwards'})
      window.removeEventListener('scroll', () => console.log('Passed'))
    }
    if(e.path[1].innerHeight < 800 && e.path[1].pageYOffset >= 2300) {
      setStyle({animation: 'card 1s ease-out forwards'})
      window.removeEventListener('scroll', () => console.log('Passed'))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', e => scrollHandler(e))
    return () => window.removeEventListener('scroll', () => console.log('Passed'))
  }, [])

  return (
    <section className='blogs'>
      <div className='blogs-heading'>
        <h1>Blog</h1>
        <p>Learn more about the supplements before choosing one to try. The Naturalmuch blog covers a wide range of health topics.</p>
      </div>
      <div className='blogs-section'>
        <div className='arrow-container'>
          <button className='arrow'><img src={arrowLeft} alt='arrow-left'/></button>
          <button className='arrow'><img src={arrowRight} alt='arrow-right'/></button>
        </div>
        <div className='cards-container'>
          <div className='card'>
            <div style={style} className='card-img'>
              <img src='https://i.ibb.co/d6bCFwt/Eat-Less-Image.png' alt='Foods'/>
            </div>
            <div className='card-desc'>
              <h3>Eat Less, Feel Full: Mindful Eating</h3>
              <button className='read-more'>Read More &gt;</button>
            </div>
          </div>
            <div className='card'>
              <div style={style} className='card-img'>
                <img src='https://i.ibb.co/9sLghjL/5-Easy-Ways-Image.png' alt='Foods'/>
              </div>
              <div className='card-desc'>
                <h3>5 Easy Ways To Boost Your Metabolism</h3>
                <button className='read-more'>Read More &gt;</button>
              </div>
            </div>
            <div className='card'>
              <div style={style} className='card-img'>
                <img src='https://i.ibb.co/vB8mYm7/5-Signs-of-PCOS-Image.png' alt='Foods'/>
              </div>
              <div className='card-desc'>
                <h3>5 Signs of PCOS You Shouldn't Ignore</h3>
                <button className='read-more'>Read More &gt;</button>
              </div>
            </div>
          </div>
      </div>
      <div className='green-bg'>
        <img src='https://i.ibb.co/1n6QCRh/Green-BG.png' alt='Green Background'/>
      </div>
    </section>
  )
}

export default Blogs
