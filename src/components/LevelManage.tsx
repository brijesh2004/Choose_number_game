"use client";
import React, { useState ,useEffect} from 'react'
import levelstyle from '@/app/style/level.module.css';
import Circle from './Circle';
import Completepopup from './Completepopup';
import Failed from './Failed';

const LevelManage = (props:any) => {
    let level = Number(props.l);

    const [time , setTime] = useState(12*level);
    let arraye = Array.from({length:5*level}, (_, i) => i + 1);
    const [array , setArray] = useState(arraye);
    const [arrlen , setArrlen] = useState(arraye.length);

    function shuffleArray(array:any) {
        for (let i = array.length - 1; i > 0; i--) {
          // Generate a random index from 0 to i
          const j = Math.floor(Math.random() * (i + 1));
          // Swap elements at indices i and j
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      // Example usage:
      // let myArray = array;
      //shuffleArray(array);
     // console.log(myArray);

     const clickFun = (e: any) => {
      console.log("tar" , e.target.innerText);
      let clickedNum = Number(e.target.innerText);
      setArray(array => {
        if (Math.max(...array) === clickedNum) {
          console.log("true");

          // Ensure numerical sorting before slicing
          let newArray = [...array].sort((a, b) => a - b).slice(0, -1);
          setArrlen(newArray.length);
          return shuffleArray(newArray); // Shuffle and return the new array
        } else {
          e.target.backgroundColor='red';
          return shuffleArray([...array]); // Just shuffle and return the array if not matching
        }
      });
      // setIsBouncing(false);
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime((prevTime) => {
          // Check if the game is still ongoing
          if (prevTime >= 1 && arrlen > 0) {
            return prevTime - 1; // Decrement time if the game hasn't ended
          } else {
            clearInterval(intervalId); // Stop the timer if the game has ended or time ran out
            return prevTime; // Return the current time without decrementing
          }
        });
      }, 1000);
    
      // Clear the interval when the component unmounts or the game ends
      return () => clearInterval(intervalId);
    }, [arrlen, time]); // Add arrlen to the dependency array to react to its changes
    
    
  return (
    <div className={levelstyle.main}>
       <p>Remaining Time  {time} s</p>
     {arrlen!==0&&time!==0?<div className={levelstyle.game_contant}>
   
      <div className={levelstyle.box}  >
       {
        array.map((elem:any , ind:any)=>{
          return <Circle val={elem} onClick={clickFun} key={ind}/>
        })
       }
      </div>
      </div>:''
      }

    { arrlen>0&&time===0?<Failed level={level}/>:''}

   {arrlen===0&&time>0?<Completepopup level={level}/>:''}
    </div>
  )
}

export default LevelManage
