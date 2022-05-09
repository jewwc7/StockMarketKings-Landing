import React, { useState, useContext, useEffect } from "react";
//import Modal from "./Modal";
import { Grid, Button, IconButton, Paper, Hidden } from "@mui/material";
//import { makeStyles } from "@mui/material/styles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useHistory,
} from "react-router-dom";

const TopNav = ({ setOutline, outline }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const redBackgroundColor = "rgba(65,0,0,.9)";
  // const history = useHistory();
  async function goToPage(page) {
    //  history.push(page);
  }

  return (
    <Grid
      container
      style={{
        //    justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <Grid
        item
        container
        justifyContent="flex-start"
        alignItems="center"
        style={{
          height: "80%",
          paddingLeft: 8,
          cursor: "pointer",
          // backgroundColor: "blue",
        }}
        xs={6}
        onClick={() => {
          goToPage("/");
          setOutline({ home: true });
        }}
      >
        <img
          //   src={LogoWithText}
          alt="TuffHammer Logo"
          style={{ height: "100%" }}
        />
      </Grid>
      <Grid
        item
        style={{
          paddingRight: "5%",
          justifyContent: "flex-end",
          display: "flex",
        }}
        xs={6}
      >
        <Hidden smDown>
          <Button
            variant={outline.home ? "outlined" : null}
            onClick={() => {
              goToPage("/");
              setOutline({ home: true });
            }}
          >
            <p className="nav-btns">Home</p>
          </Button>
          <Button
            onClick={() => {
              goToPage("/");
              setOutline({ home: true });

              setTimeout(() => {
                window.scrollTo({
                  top: 750,
                  behavior: "smooth",
                });
              }, 500);
            }}
          >
            <p className="nav-btns">Services</p>
          </Button>
          <Button
            className="nav-btns"
            variant={outline.projects ? "outlined" : null}
            onClick={() => {
              goToPage("/projects");
              setOutline({ projects: true });
            }}
          >
            <p className="nav-btns">Projects</p>
          </Button>
          <Button
            onClick={() => {
              goToPage("/");
              setOutline({ home: true });
              setTimeout(() => {
                window.scrollTo({
                  //this is how you scroll to bottom of page, used timeout so the new pages coordinates can be used(w/o timeout will scroll as far as prior page went down)
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }, 500);
            }}
          >
            <p className="nav-btns">Contact Us/Jobs</p>
          </Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton>
            <DehazeIcon
              //     style={{color: '#003E3A'}} //not working
              onClick={() => setModalVisible(!modalVisible)}
            />
          </IconButton>
        </Hidden>
      </Grid>
    </Grid>
  );
};

const styles = {
  mainContainer: {
    width: "100%",
    height: 100,
    display: "flex",
    //   backgroundColor: '#3f0d12',
    //  backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
    backgroundColor: "rgba(250,250,50,1)",
    // flex: 1,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
};

export default TopNav;
