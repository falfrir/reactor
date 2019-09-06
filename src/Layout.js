import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {
    Container,
    Box,
    List,
    ListItem,
    Drawer,
    ListItemText
} from '@material-ui/core'

const styles = {
    listItem: {
        fontSize: 16,
        color: '#000',
        fontWeight: '400',
    },
    link: {
        fontSize: 16,
        color: 'inherit',
        fontWeight: '400',
        textDecoration: 'none',
    },
    linkActive: {
        color: 'amber',
        textDecoration: 'none',
    },
};

const Layout = ({children}) => (
    <div>
        <Drawer variant="permanent" anchor="left">
            <List component='nav'>
                <NavLink
                    to='/'
                    style={{textDecoration: 'none'}}
                    activeStyle={styles.linkActive}
                >
                    <ListItem button style={styles.link}>
                        <ListItemText primary="Home"/>
                    </ListItem>
                </NavLink>
                <NavLink
                    to='/posts'
                    style={{textDecoration: 'none'}}
                    activeStyle={styles.linkActive}
                    >
                    <ListItem button style={styles.link}>
                        <ListItemText primary="Posts"/>
                    </ListItem>
                </NavLink>
            </List>
        </Drawer>
        <Container mt={6}>
            <Box my={2}>
                {children}
            </Box>
        </Container>
    </div>
);

export default withRouter(Layout)
