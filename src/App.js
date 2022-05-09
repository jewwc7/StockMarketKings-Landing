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
import DehazeIcon from "@material-ui/icons/Dehaze";

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
        style={{ backgroundColor: "#F5FFFF", height: 500 }}
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
        style={{ backgroundColor: "#F5FFFF", paddingTop: 32 }}
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
        style={{ backgroundColor: "#F5FFFF", paddingTop: 32 }}
      >
        <FifthSection />
      </Grid>
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
      <Grid item xs={12} md={5}>
        <h1>Create Funds and Test Strategies</h1>
        <p>
          Based on real stock market data, you’ll create funds(basket of stocks)
          and track their performance over time.
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
        <h1>Start Competitions</h1>
        <p>
          Place your created funds up against other users. You decide the
          amount, competitors allowed, max stocks allowed and more!
        </p>
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
      <Grid item xs={12} md={5}>
        <h1 style={{ color: "#F5FFFF" }}>Browse the Community</h1>
        <p style={{ color: "#F5FFFF" }}>
          Scroll the community to see others created funds and their
          performance. View and join other competitions
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

const FifthSection = () => {
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
        <h1>Build the Greatest Empire</h1>
        <p>
          You make(and lose) money by competing and your created funds
          performance.Will you come out on top?{" "}
        </p>
      </Grid>
    </Grid>
  );
};

const OldTopNav = ({ setOutline, outline }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const redBackgroundColor = "rgba(65,0,0,.9)";
  const history = useNavigate();
  async function goToPage(page) {
    history.push(page);
  }

  return (
    <Grid
      item
      container
      xs={12}
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

const TopNav = () => {
  return (
    <Grid item container style={{ height: 80, alignItems: "center" }}>
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
          <IconButton>
            <DehazeIcon
            //     style={{color: '#003E3A'}} //not working
            // onClick={() => setModalVisible(!modalVisible)}
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
export default App;
