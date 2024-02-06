"use client";
import LevelManage from '@/components/LevelManage';
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation';


const page = (params:any) => {
  const router = useRouter();
   let level =  Number(params.params.id[0]);
   const [levelvalue ,setLevel] = useState(1);

    // localStorage.setItem('level' , params.params.id[0]);
    useEffect(()=>{
      if(localStorage.getItem('level')){
          setLevel(Number(localStorage.getItem('level')));
      }
      else{
        localStorage.setItem('level' , '1');
      }
      let l = Number(params.params.id[0]);
      let v = Number(localStorage.getItem('level'));
      if(l>v){
        router.push(`/level/${v}`);
      }
      setLevel(v);
    },[])
  return (
    <div>
     {level>0? 
     <div>
      <h1 style={{textAlign:'center'}}>Level {level}</h1>
      <LevelManage l={level}/>
      </div>:<h1>Enter Correct level</h1>}
    </div>
  )
}

export default page
