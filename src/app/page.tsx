"use client";
import { useRouter } from "next/navigation";
import style from '@/app/style/level.module.css'
export default function Home() {
  const router = useRouter();
  return (
   <div className={style.main}> 
    <h1>Hey Welcome to the Choose Greatest Number Game</h1>
   <button className={style.btn}
   onClick={()=>router.push('/level')}>Start Playing</button>
   </div>
  );
}
