import {Container, AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

type MainProps = {
    currentView: string,
}

const Main = (props: MainProps) => {
    return <Container maxWidth="sm">
        <AppBar>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.currentView}
                </Typography>
            </Toolbar>
        </AppBar>
        <Box></Box>
    </Container>
}

export default Main