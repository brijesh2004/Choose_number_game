"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import style from '@/app/style/level.module.css'

const Completepopup = ({level}:any) => {
    const router = useRouter();
    let level1= localStorage.getItem('level');
    let num = Number(level1);
  return (
    <div>
      <h1>Awesome You have Done 🔥🔥</h1>
      <button onClick={()=> {
        let t = Number(localStorage.getItem('level'));
        if(t>level){}
        else
        localStorage.setItem('level' , String(num+1));

        router.push(`/level/${level+1}`)
      }
        } className={style.btn}>Next</button>
    </div>
  )
}

export default Completepopup
