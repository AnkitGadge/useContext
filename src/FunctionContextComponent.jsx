import React from 'react'
import { useTheme,useThemeUpdate } from './ThemeContext';
import { useContext } from 'react'
import {ThemeContext} from './App'

export default function FunctionContextComponent() {

    const toggleTheme=useThemeUpdate();
    const darkTheme=useTheme();
    const themeStyles=(darkTheme)=>{
        return{
            backgroundColor:darkTheme?'#333':'#ccc',
            color:darkTheme?'#ccc':'#333',
            padding:'2rem',
            margin:'2rem'
        }
    }
  return (
    <div>
       <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles(darkTheme)}>Function Theme</div>
    </div>
  )
}
