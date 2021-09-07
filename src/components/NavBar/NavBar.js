import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../assets/images/logo.png"
import "./NavBar.css"
import LanguageSelect from './LanguageSelect';


export default function SearchAppBar() {

    return (
        <div className="toolbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="navLeft" >
                <div>
                    <button className="navButton" variant="contained"  >
                        <p> Login/Signup</p>
                    </button>
                </div>
                <div>
                    <LanguageSelect />
                </div>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
            </div>
        </div>
    );
}
