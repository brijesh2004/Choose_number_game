"use client";
import React, { useEffect, useState } from 'react';
import style from '@/app/style/level.module.css';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  // Use useState to manage the levels array
  const [levels, setLevels]:any = useState([]);

  useEffect(() => {
    let level;
    // Check if level is stored in localStorage and update accordingly
    if (localStorage.getItem('level')) {
      level = Number(localStorage.getItem('level'));
    } else {
      level = 1;
      localStorage.setItem('level', String(level));
    }
    // Use setLevels to update the state, which will trigger a re-render
    setLevels(Array.from({ length: level }, (_, i) => i + 1));
    // No need to include array in the dependency array
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className={style.mainstyle}>
      <h1>Levels Unlocked</h1>
      {
        levels.map((elem:any, ind:any) => (
          <button key={ind} className={style.btn} onClick={() => {
            router.push(`/level/${elem}`);
          }}>
            Level {elem}
          </button>
        ))
      }
    </div>
  );
};

export default Page;
