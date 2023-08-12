import React from 'react'
import  {ThemeContext }from  './App'; 



export default function ClassContextComponent() {

   const themeStyles=(dark)=>{
        return{
            backgroundColor:dark?'#333':'#ccc',
            color:dark?'#ccc':'#333',
            padding:'2rem',
            margin:'2rem'
        }
    }
  return (
    <div>
      <ThemeContext.Consumer>
        {darkTheme=>{
            return<div style={themeStyles(darkTheme)}>Class Theme</div>
        }}
      </ThemeContext.Consumer>
    </div>
  )
}
