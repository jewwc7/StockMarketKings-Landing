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
  useMediaQuery,
  useTheme,
  createTheme,
  Icon,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sectionOne from "./Photos/sectionOne.svg";
import appIcon from "./Photos/appIcon.svg";
import fundChart from "./Photos/fundchart.svg";
import compPhotos from "./Photos/compphoto.svg";
import community from "./Photos/community.svg";
import empire from "./Photos/empire.svg";
import funds from "./Photos/funds.svg";
import smallFunds from "./Photos/funds-small.svg";
import smallEmpire from "./Photos/empire-small.svg";
import smallCommunity from "./Photos/community-small.svg";
import smallCompPhoto from "./Photos/compphoto-small.svg";
import twitter from "./Photos/twitter.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useNavigate,
} from "react-router-dom";
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      largeTablet: 840, //haldSCreen too
      laptop: 1024,
      desktop: 1200,
    },
  },
});

function App() {
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"), {}); //xs, sm
  const tablet = useMediaQuery(theme.breakpoints.down("largeTablet"), {}); //md
  const largeTablet = useMediaQuery(theme.breakpoints.down("laptop"), {}); //md

  const laptop = useMediaQuery(theme.breakpoints.down("desktop"), {}); //large
  const desktop = useMediaQuery(theme.breakpoints.up("desktop"), {}); //xl

  const photoHeight = getPhotoDimensions();
  const padding = addPadding();
  const textAlignment = getTextAlignment();
  function addPadding() {
    console.log(laptop);
    if (mobile)
      return {
        paddingLeft: 16,
        paddingRight: 16,
      };
    else return {};
  }
  function getPhotoDimensions() {
    if (mobile) return 300;
    if (tablet) return 600;
    if (largeTablet) return 600;
    if (laptop) return 800;
    return 800; //must be a large Screen
  }

  function getTextAlignment() {
    if (mobile) {
      return {}; //stay left aligned on mobile
    }
    if (tablet) {
      //center on tablet
      return {
        textAlign: "center",
      };
    } else return {};
  }

  const pageProps = {
    photoHeight,
    mobile,
    tablet,
    desktop,
    laptop,
    largeTablet,
    textAlignment,
  };
  const firstSectionHeight = mobile ? 800 : tablet ? 800 : 800;
  return (
    <Grid style={{ flex: 1 }}>
      <TopNav {...pageProps} />

      <Grid
        item
        container
        xs={12}
        style={{
          backgroundColor: "white",
          height: firstSectionHeight,
          paddingTop: 32,
        }}
      >
        <FirstSection {...pageProps} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{ backgroundColor: "#E9ECF2", paddingTop: 32, ...padding }}
      >
        <SecondSection {...pageProps} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{ backgroundColor: "white", paddingTop: 32, ...padding }}
      >
        <ThirdSection {...pageProps} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{
          backgroundColor: "#26437C",
          paddingTop: 32,
          ...padding,
        }}
      >
        <FourthSection {...pageProps} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{ backgroundColor: "#E9ECF2", paddingTop: 32, ...padding }}
      >
        <FifthSection {...pageProps} />
      </Grid>
      <Footer {...pageProps} />
    </Grid>
  );
}

const FirstSection = ({ photoHeight, textAlignment, tablet }) => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        //   justifyContent: "space-evenly",
        //   alignItems: "center",
        position: "relative",
        flex: 1,
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
            <DownloadBtn />{" "}
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
        <Grid
          item
          container
          xs={12}
          justifyContent={tablet ? "center" : null}
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={fundChart}
            alt="me"
            style={{
              width: photoHeight,
              height: photoHeight,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const SecondSection = ({
  photoHeight,
  mobile,
  largeTablet,
  tablet,
  desktop,
  laptop,
  textAlignment,
}) => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        justifyContent: tablet ? "space-between" : "space-evenly",
        alignItems: "center",
        //   position: "relative",
        flex: 1,
        //   flexDirection: "row-reverse",
      }}
    >
      <Grid
        item
        container
        xs={12}
        md={5}
        justifyContent={tablet ? "center" : null}
      >
        <img
          src={tablet ? smallFunds : funds}
          alt="me"
          style={{
            width: photoHeight,
            height: photoHeight,
            top: tablet ? 10 : 80,
            position: "relative",
          }}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <h1 style={{ ...textAlignment }}>
          <span className="boxed-span">Create </span>Funds and{" "}
          <span className="boxed-span">Test</span> Strategies
        </h1>
        <p style={{ ...textAlignment }}>
          Based on real stock market data, you’ll create funds(basket of stocks)
          and track their performance over time.
        </p>
      </Grid>
    </Grid>
  );
};

const ThirdSection = ({
  textAlignment,
  photoHeight,
  mobile,
  tablet,
  desktop,
  laptop,
}) => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        justifyContent: tablet ? "space-evenly" : "space-evenly",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Grid item xs={12} md={4}>
        <h1 style={{ ...textAlignment }}>
          Start{" "}
          <span
            className="boxed-span"
            style={{ color: "white", backgroundColor: "#151515" }}
          >
            Competitions
          </span>
        </h1>
        <p style={{ ...textAlignment }}>
          Place your created funds up against other users. You decide the
          amount, competitors allowed, max stocks allowed and more!
        </p>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={7}
        justifyContent={tablet ? "center" : null}
      >
        <img
          src={tablet ? smallCompPhoto : compPhotos}
          alt="me"
          style={{
            width: photoHeight,
            height: photoHeight,
            top: tablet ? 10 : 80,
            position: "relative",
            // borderRadius: 5,
            // filter: "brightness(80%)",
          }}
        />
      </Grid>
    </Grid>
  );
};

const FourthSection = ({
  textAlignment,
  photoHeight,
  mobile,
  tablet,
  desktop,
  laptop,
}) => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        justifyContent: tablet ? "space-between" : "space-evenly",
        alignItems: "center",
        // flexDirection: "row-reverse",
      }}
    >
      <Grid
        item
        container
        xs={12}
        md={5}
        justifyContent={tablet ? "center" : null}
      >
        <img
          src={tablet ? smallCommunity : community}
          alt="me"
          style={{
            width: photoHeight,
            height: photoHeight,
            top: tablet ? 0 : 80,
            position: "relative",
            // borderRadius: 5,
            // filter: "brightness(80%)",
          }}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <h1 style={{ color: "white", ...textAlignment }}>
          Browse the{" "}
          <span className="boxed-span" style={{ backgroundColor: "#151515" }}>
            Community
          </span>
        </h1>
        <p style={{ color: "white", ...textAlignment }}>
          Scroll the community and see others created funds and their
          performance. View and join other competitions
        </p>
      </Grid>
    </Grid>
  );
};

const FifthSection = ({
  textAlignment,
  photoHeight,
  mobile,
  tablet,
  desktop,
  laptop,
}) => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        justifyContent: tablet ? "space-evenly" : "space-evenly",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Grid item xs={12} md={4}>
        <h1 style={{ ...textAlignment }}>
          <span className="boxed-span">Build</span> the Greatest Empire
        </h1>
        <p style={{ ...textAlignment }}>
          You make(and lose) money by competing and your created funds
          performance.Will you come out on top?{" "}
        </p>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={7}
        justifyContent={tablet ? "center" : null}
        //  style={{ backgroundColor: "red", justifyContent: "center" }}
      >
        <img
          src={tablet ? smallEmpire : empire}
          alt="me"
          style={{
            width: photoHeight,
            height: photoHeight,
            top: tablet ? 10 : 80,
            position: "relative",
            // borderRadius: 5,
            // filter: "brightness(80%)",
          }}
        />
      </Grid>
    </Grid>
  );
};

const TopNav = ({ mobile, tablet, desktop, laptop }) => {
  return (
    <Grid
      item
      container
      style={{
        height: 80,
        alignItems: "center",
        borderBottom: "1.5px solid ",
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <Grid
        item
        container
        // justifyContent={smallScreen ? "space-between" : "center"}
        alignItems="center"
        direction={"row"}
        style={{
          height: "80%",
          //  paddingLeft: 8,
          cursor: "pointer",
          // backgroundColor: "blue",
        }}
        xs={12}
        md={6}
      >
        <img src={appIcon} alt="TuffHammer Logo" style={{ height: "100%" }} />
        <h2 style={{ marginLeft: 8 }}>Stock Market Kings</h2>
      </Grid>
      <Hidden mdDown>
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
            <IconButton>DehazeIcon</IconButton>
          </Hidden>
        </Grid>
      </Hidden>
    </Grid>
  );
};

const DownloadBtn = ({
  height,
  width,
  backgroundColor,
  textColor,
  iconColor,
  iconSize,
  noIcon,
}) => {
  function goToAppStore() {
    window.open(
      "https://apps.apple.com/us/app/stock-market-kings/id1618162738"
    );
  }
  return (
    <Paper
      style={{
        width: width || 200,
        height: height || 80,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: backgroundColor || "#26437C",
        cursor: "pointer",
        borderRadius: 8,
      }}
      elevation={4}
      onClick={goToAppStore}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: textColor || "#f5ffff",
          }}
        >
          Download App
        </p>
        <div style={{ display: noIcon ? "none" : "flex" }}>
          <ArrowForwardIcon
            style={{
              paddingLeft: 8,
              fontSize: iconSize || 32,
              color: iconColor || "#f5ffff",
            }}
          />
        </div>
      </div>
    </Paper>
  );
};

const Footer = ({ tablet, mobile }) => {
  const btnHieght = tablet ? "100%" : "100%";
  return (
    <Grid item container xs={12} style={{ height: 160 }} alignItems="center">
      <Grid
        item
        container
        xs={12}
        md={8}
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection={mobile ? "column-reverse" : "row"}
      >
        <div style={{ marginRight: 16 }}>
          <DownloadBtn height={btnHieght} width={btnHieght} noIcon />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Follow Us On</h2>
          <div style={{ marginLeft: 8, zIndex: 100 }}>
            <img
              src={twitter}
              className="social-icons"
              alt="twitter profile"
              onClick={() =>
                window.open("https://www.twitter.com/Smarket_King/")
              }
            />
          </div>
        </div>
      </Grid>
      <Grid item container xs={12}></Grid>
    </Grid>
  );
};

export default App;
