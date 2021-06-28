import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import NoteIcon from '@material-ui/icons/Note';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import "../../styles/style.css";
import logo from "../../styles/images/NextStack_Logo.png";

const drawerWidth = 225;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },

  container: {
    marginTop: 'none',
  },
  card: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'row',
  },
  fixedHeight: {
    height: 240,
  },

}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          {open === true ?
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
            :
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          }
        </div>
        <div >
          <img class="image" src={logo}></img>
        </div>
        <List>
          <ListItem button>
            <ListItemIcon class="icon">
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText class="dashboard" primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon class="icon">
              <GroupIcon />
            </ListItemIcon>
            <ListItemText class="groups" primary="Groups" />
          </ListItem>
          <ListItem button>
            <ListItemIcon class="icon">
              <NoteIcon />
            </ListItemIcon>
            <ListItemText class="tests" primary="Tests" />
          </ListItem>
          <ListItem button>
            <ListItemIcon class="icon">
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText class="admins" primary="Admins" />
          </ListItem>
          <ListItem button>
            <ListItemIcon class="icon">
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText class="settings" primary="Settings" />
          </ListItem>
          <ListItem button style={{ marginTop: 140 }}>
            <ListItemIcon class="icon">
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText class="logout" primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div />
        <Container maxWidth="lg" className={classes.container} style={{ marginTop: "none" }}>
          <Grid container spacing={3} >
            {/* Groups */}
            <Grid item xs={12} lg={12}  >
              <div style={{ marginTop: "30px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item >
                    <Icon style={{ marginRight: "1%" }}>groups</Icon>
                  </Grid>
                  <Grid item xs spacing={4}  >
                    <Typography  ><b>Groups</b></Typography>
                  </Grid>
                  <div >
                    <Button class="button" style={{ width: "130px" }}>+ New Group</Button>
                  </div>
                </Grid>
              </div>
              <div class="typo">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
              </div>
            </Grid>

            {/* Card for batches */}
            <Grid container spacing={2}>
              < Grid item xs={12} md={6} lg={4} >

                <Card class="card" >
                  <CardHeader
                    title="Batch 1" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div>

                      <Button style={{marginLeft:60}} fullWidth="true" disableElevation>View / Add</Button>
                    </div>
                  </CardActions>
                </Card>
              </Grid>

              < Grid item xs={12} md={6} lg={4} >
                <Card class="card" >
                  <CardHeader
                    title="Batch 2" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div style={{ marginLeft: 110 }}><Button className="button2" variant="contained" color="default" disableElevation>View / Add</Button></div>
                  </CardActions>
                </Card>
              </Grid>

              < Grid item xs={12} md={6} lg={4} >
                <Card class="card" >
                  <CardHeader
                    title="Batch 3" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div style={{ marginLeft: 110 }}><Button className="button2" variant="contained" color="default" disableElevation>View / Add</Button></div>
                  </CardActions>
                </Card>
              </Grid>

              < Grid item xs={12} md={6} lg={4} >
                <Card class="card" >
                  <CardHeader
                    title="Batch 4" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div style={{ marginLeft: 110 }}><Button className="button2" variant="contained" color="default" disableElevation>View / Add</Button></div>
                  </CardActions>
                </Card>
              </Grid>

              < Grid item xs={12} md={6} lg={4} >
                <Card class="card" >
                  <CardHeader
                    title="Batch 5" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div style={{ marginLeft: 110 }}><Button className="button2" variant="contained" color="default" disableElevation>View / Add</Button></div>
                  </CardActions>
                </Card>
              </Grid>

              < Grid item xs={12} md={6} lg={4} >
                <Card class="card" >
                  <CardHeader
                    title="Batch 6" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div style={{ marginLeft: 110 }}><Button className="button2" variant="contained" color="default" disableElevation>View / Add</Button></div>
                  </CardActions>
                </Card>
              </Grid>

              < Grid item xs={12} md={6} lg={4} >
                <Card class="card" >
                  <CardHeader
                    title="Batch 7" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div style={{ marginLeft: 110 }}><Button className="button2" variant="contained" color="default" disableElevation>View / Add</Button></div>
                  </CardActions>
                </Card>
              </Grid>

              < Grid item xs={12} md={6} lg={4} >
                <Card class="card" >
                  <CardHeader
                    title="Batch 8" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div style={{ marginLeft: 110 }}><Button className="button2" variant="contained" color="default" disableElevation>View / Add</Button></div>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={4} >
                <Card class="card" >
                  <CardHeader
                    title="Batch 9" />
                  <CardActions >
                    <AvatarGroup max={2} style={{ marginTop: 40 }, { marginButton: 20 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <div style={{ marginLeft: 110 }}><Button className="button2" variant="contained" color="default" disableElevation>View / Add</Button></div>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}