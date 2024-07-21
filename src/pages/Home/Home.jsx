import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'
import './Home.css'

const Home = () => {

  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])


  return (
    <div className='home px-0 py-15 pb-24'>
      <div className='hero my-20 m-auto flex flex-col items-center text-center gap-[1.88rem];'>
        <h1 className='font-semibold text-[max(3vw,36px)] text-white'>Cryptocurrancy <br /> Exchange Marketplace </h1>
        <p className='font-light w-3/4 text-[#e3e3e3] leading-normal'>Welcome to the world's Largest cryptocurrency marketplace. Sign up to explore more about cryptos</p>
        <form className='p-2 w-3/5 mt-3 bg-white rounded-full text-xl flex justify-between items-center gap-[0.63rem]'>
          <input type="text" placeholder='Search Crypto..' className='search-box flex-1 ml-4 text-black focus:outline-none focus:ring-0' />
          <button type='submit' className='text-[white] text-base cursor-pointer px-[30px] py-2.5 rounded-full border-none bg-[#006494]'>Search</button>
        </form>
      </div>

      <div className='crypto-table '>
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + - +item.symbol}</p>
              </div>
              <p>{currency.symbol}{item.current_price}</p>
              <p className={item.price_change_percentage_24h > 0? "green":"red"}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p>{currency.symbol}{item.market_cap.toLocaleString()}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Home