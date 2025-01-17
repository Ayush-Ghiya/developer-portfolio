import React, { createContext, useState } from 'react'

import { purpleThemeDark, purpleThemeLight } from '../theme/theme';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(purpleThemeDark)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [isDark, setDark] = useState(true);
    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const changeTheme = () => {
        if (isDark) {
            setTheme(purpleThemeLight);
            setDark(false);
        } else {
            setTheme(purpleThemeDark);
            setDark(true);
        }
    }

    const value = { theme, drawerOpen, setHandleDrawer,changeTheme,isDark }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider