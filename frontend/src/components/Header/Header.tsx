import React from 'react';
import {AppBar, Link, Typography, Container} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import './Header.css';

const Header: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                            <Link href="/" color="inherit"  underline="none">
                                Чат
                            </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
