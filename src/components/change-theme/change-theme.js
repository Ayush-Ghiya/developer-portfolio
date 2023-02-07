import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';

import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';
import './change-theme.css';

const ChangeTheme = () => {
  const { theme, changeTheme, isDark } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    icon: {
        
        color: theme.primary,
        
        fontSize: '2.2rem',
        
        transition: '100ms ease-out',
        '&:hover': {
            backgroundColor: theme.secondary,
            color: theme.tertiary,
            
        },
        
    },
   
  }));

  const classes = useStyles();

  return (
    <div
      className='changeTheme'
    >
      <button onClick={changeTheme} aria-label='Back to top' className={classes.iconBtn}>
        {isDark ?
          <FaSun className={classes.icon} />
          :
          <FaMoon className={classes.icon} />
        }
      </button>
    </div>
  );
};

export default ChangeTheme;