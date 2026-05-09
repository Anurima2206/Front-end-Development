// eslint-disable-next-line no-unused-vars
import React from 'react'

const Slide = ({slide,handleInput,bgcolor,textcolor}) => {
  return (
    <div className="slide">
        <input type="range" min={0} max={100} value={slide} onInput={handleInput} />
        <div className="circle" style={{
            color: !textcolor ?"black":textcolor,
            background: !bgcolor ? "orange" :bgcolor,
            height: `${slide*3}px`,
            width: `${slide*3}px`
        }}>
            <span>{slide}</span>
        </div>
    </div>
  )
}

export default Slide;