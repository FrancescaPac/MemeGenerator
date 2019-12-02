import React from 'react'

function MemeComponent(props){
    
          return (
             <div className="meme">
                <img src={props.src} alt={props.alt}/>
                <h2 className="top">{props.topText}</h2>
                <h2 className="bottom"> {props.bottomText}</h2>
            </div>)
    
}

export default MemeComponent
