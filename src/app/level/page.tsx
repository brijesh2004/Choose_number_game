"use client";
import React from 'react'
import style from '@/app/style/level.module.css';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  let level ;
  if(localStorage.getItem('level')){
    level = Number(localStorage.getItem('level'));
  }
  else{
    level = 1;
  }
  let array = Array.from({length:level}, (_, i) => i + 1);
  return (
    <div className={style.mainstyle}>
      <h1>Levels Unloacked</h1>
      {
        array.map((elem , ind)=>{
          return <button key={ind} className={style.btn} onClick={()=>{
            router.push(`/level/${elem}`)
          }}>Level {elem}</button>
        })
      }
    </div>
  )
}

export default page
