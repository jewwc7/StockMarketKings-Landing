import React, { useState, useContext, useEffect } from "react";

import "./App.css";
//import TopNav from "./TopNav";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  Grid,
  Button,
  IconButton,
  Paper,
  Hidden,
  Container,
} from "@mui/material";
//import DehazeIcon from "@material-ui/icons/Dehaze";

import sectionOne from "./Photos/sectionOne.svg";
import appIcon from "./Photos/appIcon.svg";
import fundChart from "./Photos/fundchart.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useNavigate,
} from "react-router-dom";
function App() {
  return (
    <div style={{}}>
      <TopNav />
      <Grid
        item
        container
        xs={12}
        style={{ backgroundColor: "white", height: 500 }}
      >
        <FirstSection />
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{ backgroundColor: "#E9ECF2", paddingTop: 32 }}
      >
        <SecondSection />
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{ backgroundColor: "#E9ECF2", paddingTop: 32 }}
      >
        <ThirdSection />
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{ backgroundColor: "#26437C", paddingTop: 32 }}
      >
        <FourthSection />
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{ backgroundColor: "#E9ECF2", paddingTop: 32 }}
      >
        <FifthSection />
      </Grid>
      <Footer />
    </div>
  );
}

const FirstSection = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        //   justifyContent: "space-evenly",
        //   alignItems: "center",
        height: 500,
        position: "relative",
        borderBottomColor: "red",
        borderBottomWidth: 3,
      }}
    >
      <Grid xs={12} md={6} container item alignItems={"center"}>
        <Grid item style={{ padding: 24 }}>
          <h1
            style={{
              lineHeight: 1.2,
            }}
          >
            Learn the Stock Market <br></br>Build your Kingdom
          </h1>
          <p
            style={{
              marginTop: 24,
            }}
          >
            Learn about stocks, test your strategies and compete with friends in
            this all in one stock market social app.{" "}
            <span style={{ fontWeight: "bold" }}>No</span> real money involved!
          </p>
          <div style={{ marginTop: 48 }}>
            <Button variant="contained">Download App</Button>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        style={{
          //   justifyContent: "flex-end",
          height: "100%",
          width: "100%",
        }}
      >
        <Grid item container xs={12} style={{ height: "100%", width: "100%" }}>
          <img
            src={fundChart}
            alt="me"
            style={{
              width: "100%",
              height: "100%",

              // borderRadius: 5,
              // filter: "brightness(80%)",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const SecondSection = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{ justifyContent: "space-evenly", alignItems: "center" }}
    >
      <Grid item xs={12} md={6}>
        <img
          src={sectionOne}
          alt="me"
          style={{
            width: 600,
            height: 600,
            // borderRadius: 5,

            // filter: "brightness(80%)",
          }}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <h1>
          <span className="boxed-span">Create </span>Funds and{" "}
          <span className="boxed-span">Test</span> Strategies
        </h1>
        <p>
          Based on real stock market data, you’ll create funds(basket of stocks)
          and track their performance over time.
        </p>
      </Grid>
    </Grid>
  );
};

const ThirdSection = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        //  position: "sticky",
      }}
    >
      <Grid item xs={12} md={5}>
        <h1>
          Start <span className="boxed-span">Competitions</span>
        </h1>
        <p>
          Place your created funds up against other users. You decide the
          amount, competitors allowed, max stocks allowed and more!
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={sectionOne}
          alt="me"
          style={{
            width: 600,
            height: 600,
            // borderRadius: 5,
            // filter: "brightness(80%)",
          }}
        />
      </Grid>
    </Grid>
  );
};

const FourthSection = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{ justifyContent: "space-evenly", alignItems: "center" }}
    >
      <Grid item xs={12} md={6}>
        <img
          src={sectionOne}
          alt="me"
          style={{
            width: 600,
            height: 600,
            // borderRadius: 5,
            // filter: "brightness(80%)",
          }}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <h1 style={{ color: "white" }}>
          Browse the{" "}
          <span className="boxed-span" style={{ backgroundColor: "#151515" }}>
            Community
          </span>
        </h1>
        <p style={{ color: "white" }}>
          Scroll the community and see others created funds and their
          performance. View and join other competitions
        </p>
      </Grid>
    </Grid>
  );
};

const FifthSection = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{ justifyContent: "space-evenly", alignItems: "center" }}
    >
      <Grid item xs={12} md={5}>
        <h1>Build the Greatest Empire</h1>
        <p>
          You make(and lose) money by competing and your created funds
          performance.Will you come out on top?{" "}
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={sectionOne}
          alt="me"
          style={{
            width: 600,
            height: 600,
            // borderRadius: 5,
            // filter: "brightness(80%)",
          }}
        />
      </Grid>
    </Grid>
  );
};

const TopNav = () => {
  return (
    <Grid
      item
      container
      style={{
        height: 80,
        alignItems: "center",
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
      >
        <img src={appIcon} alt="TuffHammer Logo" style={{ height: "100%" }} />
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
          <Button onClick={() => {}}>
            <p className="nav-btns">Invest</p>
          </Button>
          <Button
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({
                  top: 750,
                  behavior: "smooth",
                });
              }, 500);
            }}
          >
            <p className="nav-btns">Compete</p>
          </Button>
          <Button className="nav-btns">
            <p className="nav-btns">Download</p>
          </Button>
          <Button className="nav-btns">
            <p className="nav-btns">Contact</p>
          </Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton></IconButton>
        </Hidden>
      </Grid>
    </Grid>
  );
};

const Footer = () => {
  return (
    <Grid item container xs={12}>
      <Grid item container xs={12} justifyContent="center">
        <h2>Follow Us</h2>
      </Grid>
      <Grid item container xs={12}></Grid>
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
export default App;
