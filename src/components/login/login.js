import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Card, CardActions, CardHeader, Avatar, Button, Icon, Typography, CardContent
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import "../../styles/style.css";
import logo1 from "../../styles/images/akash.png";
import logo2 from "../../styles/images/abhay.jpg";
import logo3 from "../../styles/images/abhi.jpg";
import logo4 from "../../styles/images/ankush.jpg";
import logo5 from "../../styles/images/ayush.jpg";

export default class Login extends Component {
  render() {
    return (

      <div style={{ paddingLeft: 30, paddingRight: 30, marginTop: "10px" }}>
        <Grid container spacing={2}>
          <Grid container spacing={3} >
            <Grid item xs={12} md={10} lg={10}>
              <Typography style={{ color: "#21134A" }}>
                <span >
                  <Icon style={{ paddingRight: "10px", color: "#000000" }}>
                    groups
                  </Icon>
                </span>
                <b>Groups</b>
              </Typography>
              <Grid item xs={12} md={10} lg={12}>
                <Typography variant="caption" style={{ color: "#21134A" }} >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </Typography>
              </Grid>
            </Grid>
            <div>
              <Button
                class="button"
                style={{ width: "120px", margin:"20px 20px 20px 20px" }}>
                <span>+ New Group</span>
              </Button>
            </div>
          </Grid>

          <div style={{ marginTop: "10px" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card" >
                  <CardHeader title="Batch 1" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2} >
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card">
                  <CardHeader title="Batch 2" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2} >
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card">
                  <CardHeader title="Batch 3" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2} >
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card">
                  <CardHeader title="Batch 4" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2} >
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card">
                  <CardHeader title="Batch 5" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2}>
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card">
                  <CardHeader title="Batch 6" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2}>
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card">
                  <CardHeader title="Batch 7" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2} >
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card">
                  <CardHeader title="Batch 8" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2} >
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card class="card">
                  <CardHeader title="Batch 9" />
                  <CardContent>
                    <CardActions style={{ justifyContent: "space-between" }} >
                      <AvatarGroup max={2} >
                        <Avatar src={logo1} />
                        <Avatar src={logo2} />
                        <Avatar src={logo3} />
                        <Avatar src={logo4} />
                        <Avatar src={logo5} />
                      </AvatarGroup>
                      <Button
                        style={{ width: "120px", backgroundColor: "#FFFFFF" }}>
                        <span>View/Add</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    )
  }
}