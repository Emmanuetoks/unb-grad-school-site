'use client'
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai';

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(prev => !prev);
    }


    const mobileDrawer = () => {
        return (
            <div onClick={handleDrawerToggle}>

            </div>
        )
    }
    return (
        <div className="flex tw-justify-between">
            <AppBar component={'nav'}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        {/* <MenuIcon /> */}
                        <AiOutlineMenu/>
                    </IconButton>

                    <div>
                        <ul className="flex"> 
                            <li>Hello</li>
                            <li>Grad School</li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;


