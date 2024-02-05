"use client"
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitch = () => {

    const { theme, setTheme } = useTheme();


    const [mounted, setMounted] = useState(false);

    // set mounted

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    return (
        <div>


            <Switch
                defaultSelected
                size="lg"
                color="success"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <button onClick={() => setTheme('light')}><FaSun className={className} /></button>
                    ) : (
                        <button onClick={() => setTheme('dark')}><FaMoon className={className} /></button>
                    )
                }
            ></Switch>


            {theme === 'light' ? <button onClick={() => setTheme('dark')}><FaMoon className='text-xl' /></button> :
                <button onClick={() => setTheme('light')}><FaSun className='text-2xl text-primaryColor' /></button>}

        </div>
    );
};

export default ThemeSwitch;