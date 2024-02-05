import React from 'react';
import levelStyle from '@/app/style/level.module.css';

const Circle = ({ val, onClick}:any) => {
  return (
    <div>
      <div className={levelStyle.circle} onClick={onClick}>
        {val}
      </div>
    </div>
  )
}

export default Circle
