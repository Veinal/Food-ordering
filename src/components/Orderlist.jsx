import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function Orderlist() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ADMIN DASHBOARD
          </Typography>
        </Toolbar>
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
            <Link to='/productlist'>
                <ListItemButton>
                  {/* <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon> */}
                  <ListItemText secondary='Product list' />
                </ListItemButton>
            </Link>
            <Link to='/orderlist'>
                <ListItemButton>
                  {/* <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon> */}
                  <ListItemText secondary='Order list' />
                </ListItemButton>
            </Link>
          </List>
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
                <th>Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{width: "45px", height: "45px"}}
                        className="rounded-circle"
                        />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">Software engineer</p>
                  <p className="text-muted mb-0">IT department</p>
                </td>
                <td>
                  <span className="badge badge-success rounded-pill d-inline">Active</span>
                </td>
                <td>Senior</td>
                <td>
                  <button type="button" className="btn btn-link btn-sm btn-rounded">
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                        className="rounded-circle"
                        alt=""
                        style={{width: "45px", height: "45px"}}
                        />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Alex Ray</p>
                      <p className="text-muted mb-0">alex.ray@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">Consultant</p>
                  <p className="text-muted mb-0">Finance</p>
                </td>
                <td>
                  <span className="badge badge-primary rounded-pill d-inline"
                        >Onboarding</span
                    >
                </td>
                <td>Junior</td>
                <td>
                  <button
                          type="button"
                          className="btn btn-link btn-rounded btn-sm fw-bold"
                          data-mdb-ripple-color="dark"
                          >
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                        className="rounded-circle"
                        alt=""
                        style={{width: "45px", height: "45px"}}
                        />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Kate Hunington</p>
                      <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">Designer</p>
                  <p className="text-muted mb-0">UI/UX</p>
                </td>
                <td>
                  <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                </td>
                <td>Senior</td>
                <td>
                  <button
                          type="button"
                          className="btn btn-link btn-rounded btn-sm fw-bold"
                          data-mdb-ripple-color="dark"
                          >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
                  
        </Typography>
      </Box>
    </Box>
    </div>
  )
}
