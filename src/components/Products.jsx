import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from './Navbar';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

const drawerWidth = 240;
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ClippedDrawer() {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
          {/* <CssBaseline /> */}
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            {/* <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Clipped drawer
              </Typography>
            </Toolbar> */}
            <Navbar/>
            
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />

            <div>
              <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                      {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                          <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                          >
                            <CardMedia
                              component="div"
                              sx={{
                                // 16:9
                                pt: '56.25%',
                              }}
                              image="https://source.unsplash.com/random?wallpapers"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                              <Typography gutterBottom variant="h5" component="h2">
                                Heading
                              </Typography>
                              <Typography>
                                This is a media card. You can use this section to describe the
                                content.
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">View</Button>
                              <Button size="small">Edit</Button>
                            </CardActions>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
              </div>
            
          </Box>
        </Box>
    </div>
  );
}