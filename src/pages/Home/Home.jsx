import React from 'react'

const Home = () => {
  return (
    <div className='home px-0 py-15 pb-24'>
      <div className='hero my-20 m-auto flex flex-col items-center text-center gap-[1.88rem];'>
        <h1 className='font-semibold text-[max(4vw,36px)]'>Largest <br/> Crypto Marketplace </h1>
        <p className='font-light w-3/4 text-[#e3e3e3] leading-normal'>Welcome to the world's Largest cryptocurrency marketplace. Sign up to explore more about cryptos</p>
        <form className='p-2 w-3/5 mt-3 bg-white rounded-full text-xl flex justify-between items-center gap-[0.63rem]'>
          <input type="text" placeholder='Search Crypto..' className='flex-1 text-base pl-2.5 border-[none]' />
          <button type='submit' className='text-[white] text-base cursor-pointer px-[30px] py-2.5 rounded-full border-[none] bg-[#006494]'>Search</button>
        </form>
      </div>
      
      <div className='crypto-table max-w-[800px] m-auto rounded-[15px] bg-gradient-to-br from-blue-300 via-blue-600 to-blue-300'>
        <div className="table-layout grid grid-cols-[0.5fr_2fr_1fr_1.5fr_0.8fr] items-center px-5 py-[15px] border-b-[#3c3c3c] border-b border-solid">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home