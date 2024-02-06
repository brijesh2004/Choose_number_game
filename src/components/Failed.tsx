import React from 'react';
import style from '@/app/style/level.module.css';

const Failed = ({level}:any) => {
  return (
    <div>
      <h1>Better Luck Next Time 😪</h1>
      <button onClick={()=> window.location.reload()} className={style.btn}>Restart</button>
    </div>
  )
}

export default Failed
