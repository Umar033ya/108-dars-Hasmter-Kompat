import './App.css'
import coin from '../public/coin.png'
import hamster from '../public/hasmter.png'
import Coin from '../public/Coin..png'
import boost from '../public/boost.png'
import binance from '../public/binance.png'
import mine from '../public/mine.png'
import friend from '../public/friend.png'
import earn from '../public/earn.png'
import exclude from '../public/Exclude.png'
import mema from '../public/mema.png'
import airdrop from '../public/airdrop.png'
import x10 from '../public/x10 (1).png'
import { useState , useEffect} from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [limit, setLimit] = useState(100)
  const [tap, setTap] = useState(1)
  const [level, setLevel] = useState(1)
  const [perMinut, setPerMinut] = useState(15)
  const [booost, setBooost] = useState(100)
  const btnClick = () =>{
    if(limit > 0 && limit >= tap){
      setCount(prev => prev + tap)
      setLimit(prev => prev - tap)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setLimit(prev => {
        if (prev < booost) {  
          return prev + tap;      
        } else {
          return prev;        
        }
      });
    }, 1000);
  
    return () => clearInterval(interval);
  }, [booost]);
  useEffect(() => {
    if(count === 100){
      setLevel(2)
      setTap(2)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 200){
      setLevel(3)
      setTap(3)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 300){
      setLevel(3)
      setTap(3)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 400){
      setLevel(4)
      setTap(4)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 500){
      setLevel(5)
      setTap(5)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 600){
      setLevel(6)
      setTap(6)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 700){
      setLevel(7)
      setTap(7)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 800){
      setLevel(8)
      setTap(8)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 900){
      setLevel(9)
      setTap(9)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }else if(count === 1000){
      setLevel(10)
      setTap(10)
      setBooost(prev => prev + 100)
      setPerMinut(prev => prev + 15)
    }
  }, [count])
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + perMinut);
    }, 1000 * 60); 
  
    return () => clearInterval(interval);
  }, [perMinut]);
  const Mine = () => {
    document.querySelector("main").style.display = "none"
    document.querySelector(".mine").style.display ="block"
    document.querySelector(".firstMine").style.display ="block"
    document.querySelector(".SecondMine").style.display ="block"
    document.querySelector(".thirdMine").style.display ="block"

  }
  const Friends = () => {
    document.querySelector("main").style.display = "none"
    document.querySelector(".mine").style.display ="none"
    document.querySelector(".firstMine").style.display ="none"
    document.querySelector(".SecondMine").style.display ="none"
    document.querySelector(".thirdMine").style.display ="none"

  }
  const Earn = () => {
    document.querySelector("main").style.display = "none"
    document.querySelector(".mine").style.display ="none"
    document.querySelector(".firstMine").style.display ="none"
    document.querySelector(".SecondMine").style.display ="none"
    document.querySelector(".thirdMine").style.display ="none"


  }
  const Airdrop = () => {
    document.querySelector("main").style.display = "none"
    document.querySelector(".mine").style.display ="none"
    document.querySelector(".firstMine").style.display ="none"
    document.querySelector(".SecondMine").style.display ="none"
    document.querySelector(".thirdMine").style.display ="none"


  }
  const Exchange = () => {
    document.querySelector("main").style.display = "block"
    document.querySelector(".mine").style.display ="none"
    document.querySelector(".firstMine").style.display ="none"
    document.querySelector(".SecondMine").style.display ="none"
    document.querySelector(".thirdMine").style.display ="none"
  }
  const firstMine = () =>{
    if(count >= 192){
      setPerMinut(prev => prev + 120)
      setCount(prev => prev - 192)
      alert("You bought 1 mine")
    }else{
      alert("You have not enough coins")
    }
  }
  const secondMine = () =>{
    if(count >= 1500){
      setPerMinut(prev => prev + 997)
      setCount(prev => prev - 1500)
      alert("You bought 1 mine")

    }else{
      alert("You have not enough coins")
    }
  }
  const thirdMine = () =>{
    if(count >= 200){
      setPerMinut(prev => prev + 120)
      setCount(prev => prev - 200)
      alert("You bought 1 mine")
    }else{
      alert("You have not enough coins")
    }
  }
  return (
    <>
      <div className="div">
      <header>
        <div className="container">
          <nav>
            <div className='nav__start'>
              <h4>Earn per tap</h4>
              <p>
                <img src={coin} alt="" />
                <span>+{tap}</span>
              </p>
            </div>
            <div className='nav__middle'>
              <h4> Level </h4>
              <p>{level}</p>
            </div>
            <div className='nav__end'>
              <h4>Profit per minut</h4>
              <p>
                <img src={coin} alt="" />
                <span>+{perMinut}</span>
              </p>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <section>
             <div className='stn__top'>
              <img src={Coin} alt="" />
              <h1>{count}</h1>
             </div>
             <button onClick={btnClick} className='btn'>
              <img src={hamster} alt="" />
             </button>
             <div className="boost">
              <img src={boost} alt="" />
              <p>{booost}/{limit}</p>
             </div>
          </section>
        </div>
      </main>
      <div className='mine'>
       <div onClick={firstMine} className='firstMine'>
           <div className='upper'>
            <img src={mema} alt="" />
            <div>
              <h4> Тоp 10 cmc pairs</h4>
              <p>Profit per minute</p>
              <div>
                <img src={coin} alt="" />
                <p>120</p>
              </div>
            </div>
           </div>
           <div className='footers'>
            <h4>Price : <img src={coin} alt="" />192</h4>
           </div>
       </div>
       <div onClick={secondMine} className='SecondMine'>
           <div className='upper'>
            <img src={x10} alt="" />
            <div>
              <h4>Margin trading x10</h4>
              <p>Profit per minute</p>
              <div>
                <img src={coin} alt="" />
                <p>997</p>
              </div>
            </div>
           </div>
           <div className='footers'>
            <h4>Price : <img src={coin} alt="" />1500</h4>
           </div>
       </div>
       <div onClick={thirdMine}  className='thirdMine'>
           <div className='upper'>
            <img src={exclude} alt="" />
            <div>
              <h4>Тоp 10 cmc pairs</h4>
              <p>Profit per minute</p>
              <div>
                <img src={coin} alt="" />
                <p>120</p>
              </div>
            </div>
           </div>
           <div className='footers'>
            <h4>Price : <img src={coin} alt="" />200</h4>
           </div>
       </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer">
            <div onClick={Exchange} className="exchange">
              <img src={binance} alt="" />
              <p>Exchange</p>
            </div>
            <div onClick={Mine} className="mine">
              <img src={mine} alt="" />
              <p>Mine</p>
            </div>
            <div onClick={Friends} className="friends">
              <img src={friend} alt="" />
              <p>Friends</p>
            </div>
            <div onClick={Earn} className="earn">
              <img src={earn} alt="" />
              <p>Earn</p>
            </div>
            <div onClick={Airdrop} className="airdrop">
              <img src={airdrop} alt="" />
              <p>Airdrop</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

export default App