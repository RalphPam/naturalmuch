import React, {useState, useEffect} from 'react'

const FeaturedProducts = () => {

  const [styleR, setStyleR] = useState({})
  const [styleL, setStyleL] = useState({})

  const scrollHandler = (e) => {
    if(e.path[1].pageYOffset >= 700) {
      setStyleR({animation: 'productRL 1s ease-out forwards'})
      setStyleL({animation: 'productLR 1s ease-out forwards'})
      window.removeEventListener('scroll', () => console.log('Passed'))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', e => scrollHandler(e))
    return () => window.removeEventListener('scroll', () => console.log('Passed'))
  }, [])

  return (
    <section className='products'>
      <div className='products-left' style={styleL}>
        <div>
          <h3 className='product-name'>Gummy Vitamins</h3>
          <button className='view-more'>View More &gt;</button>
          <button className='shop-more'>Shop More</button>
        </div>
        <div className='gummy'>
          <img src='https://i.ibb.co/C0X9kZw/Gummy-Vitamins.png' alt='Gummy Vitamins'/>
        </div>
      </div>
      <div className='products-right' style={styleR}>
        <h1>Featured Products</h1>
        <div>
          <h3 className='product-name'>Softgels &amp; Capsules</h3>
          <button className='view-more'>View More &gt;</button>
        </div>
        <div className='capsules'>
          <img src='https://i.ibb.co/9gXsrxN/Softgels-Capsules.png' alt='Softgels and Capsules'/>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
