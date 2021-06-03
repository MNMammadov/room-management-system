import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Room availability management
                </Typography>
                <Box ml="16px">
                    <Link to="/" className="menu-link">
                        Room plans
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;