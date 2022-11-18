import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css'
const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
 // console.log(image)
   React.useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='coin'>
    <div className='coin-row'>
        <div><img src={image} alt="cryptocoin" /></div>
        
       <div ><h1>{name}</h1></div> 
        <div><p className='coin-symbol'>{symbol}</p></div>


     {priceChange < 0? ( <div> <p className='coin-price-red'>${price}</p></div>): <div> <p className='coin-price-green'>${price}</p></div>}

      
       <div> <p className='coin-volume'>${volume.toLocaleString()}</p></div>

    </div>

    </div> 
  )
}

export default Coin