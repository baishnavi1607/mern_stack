import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Card, CardContent, Avatar, Box, CardHeader, Icon, InputAdornment } from "@material-ui/core";
import Paper from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import "../../styles/adminlist.css";

export default class AdminList extends Component {

    constructor() {
        super();
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2")
            .then(res => res.json())
            .then(users => { this.setState({ students: users.data }) })
    }

    render() {
        return (
            <div>
                <Paper style={{ margin: "30px 30px 30px 30px" }} elevation={3} >
                    <Grid container spacing={2}>
                        <Grid container >
                            <Grid item xs={12} lg={6}>
                                <Card style={{ margin: "20px 20px 20px", boxShadow: "none" }}>
                                    <CardContent>
                                        <div style={{ display: "inline" }}>
                                            <Icon style={{ color: "#000000" }} fontSize="small">admin_panel_settings</Icon>
                                            <Typography
                                                display="inline"
                                                variant="h6"
                                                style={{ color: "#21134A", marginLeft: "10px" }}>
                                                Admins
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <Card style={{ boxShadow: "none" }} className="btnSearchBox">
                                    <CardContent>
                                        <TextField
                                            variant="outlined"
                                            placeholder="Search by name/email"
                                            color="disabled"
                                            size="small"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <SearchIcon style={{ color: "#9D9D9D" }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <div className="btnAddAdmin">
                                            <Button
                                                variant="outlined"
                                                size="medium"
                                                style={{
                                                    height: "40px",
                                                    color: "#7467EF",
                                                    borderColor: "#7467EF",
                                                }}>
                                                + Add other admin
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        {
                            this.state.students.map((data, i) => (
                                <Grid item xs={12}>
                                    <Box
                                        borderRadius={10}
                                        style={{
                                            border: "groove",
                                            color: "#707070",
                                            boxShadow: "none",
                                            margin: "0px 25px 25px 25px",
                                            paddingRight: "1%"
                                        }}>
                                        <Grid container >
                                            <Grid item xs={12} md={3} >
                                                <List>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                            <Avatar src={data.avatar}>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText
                                                            primary={
                                                                <Typography>{data.first_name} {data.last_name}</Typography>
                                                            } secondary={data.email} />
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                            <Grid item xs={12} md={7} style={{ marginTop: "30px" }}>
                                                <div style={{display: "flex", justifyContent:"center"}}>
                                                    <FiberManualRecordIcon
                                                        color="primary"
                                                    />
                                                    <Typography >
                                                        Joined on 18.02.2020
                                                    </Typography>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={2} >
                                                <div style={{ display: "flex", justifyContent: "flex-end" }} >
                                                    <div>
                                                        <IconButton style={{ marginTop: "20px", }}>
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton style={{ marginTop: "20px" }}>
                                                            <div className="circle_div">
                                                                <div className="bar_div"></div>
                                                            </div>
                                                        </IconButton>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            ))}
                    </Grid>
                </Paper >
            </div >
        );
    }
}
