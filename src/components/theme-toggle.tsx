'use client'

import React, { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useThemeStore } from '../../store/theme-store'
import { Button } from './ui/button'

const ThemeToggle = () => {

    const { isDarkMode,toggleTheme } = useThemeStore()
    const { theme, setTheme } = useTheme() 

    useEffect(()=>{
        console.log(theme)
        if(theme === 'dark' && !isDarkMode){
            useThemeStore.setState({isDarkMode: true})
        }else if(theme === 'light' && isDarkMode){
            useThemeStore.setState({isDarkMode: false})
        }
    },[theme,isDarkMode])
    const handleToggleTheme = ()=>{
        toggleTheme()
        console.log(theme)
        setTheme(isDarkMode ? 'light' : 'dark')
    }
  return (
    <Button value={'ghost'} size={'icon'} onClick={handleToggleTheme}>
        <Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
        <Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'/>
    </Button>
  )
}

export default ThemeToggle
