import React from "react";

import "./App.css";
import {
  Box,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import appIcon from "./Photos/app-icon.png";
import portfolio from "./Photos/portfolio.jpeg";

import twitter from "./Photos/twitter.svg";

/** Official App Store listing — badge asset from Apple (white badge = dark page backgrounds). */
const APP_STORE_URL =
  "https://apps.apple.com/us/app/stock-market-kings/id1618162738";
const APP_STORE_BADGE_WHITE =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#141414",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
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

function AppContent() {
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"), {}); //xs, sm
  const tablet = useMediaQuery(theme.breakpoints.down("largeTablet"), {}); //md
  const largeTablet = useMediaQuery(theme.breakpoints.down("laptop"), {}); //md

  const laptop = useMediaQuery(theme.breakpoints.down("desktop"), {}); //large
  const desktop = useMediaQuery(theme.breakpoints.up("desktop"), {}); //xl

  const photoHeight = getPhotoDimensions();
  const padding = addPadding();
  const textAlignment = getTextAlignment();
  function addPadding() {
    if (mobile)
      return {
        paddingLeft: 16,
        paddingRight: 16,
      };
    else return {};
  }
  function getPhotoDimensions() {
    if (mobile) return 360;
    if (tablet) return 600;
    if (largeTablet) return 600;
    if (laptop) return 800;
    return 800; //must be a large Screen
  }

  function getTextAlignment() {
    if (mobile) {
      return {};
    }
    if (tablet) {
      return {
        textAlign: "center",
      };
    }
    return {};
  }

  const firstSectionBlock =
    mobile || tablet
      ? { minHeight: "auto", paddingBottom: 24 }
      : { height: 800 };

  const pageProps = {
    photoHeight,
    mobile,
    tablet,
    desktop,
    laptop,
    largeTablet,
    textAlignment,
  };
  return (
    <Grid sx={{ flex: 1, position: "relative", bgcolor: "background.default" }}>
      <TopNav {...pageProps} />

      <Grid
        item
        container
        xs={12}
        style={{
          backgroundColor: "#000000",
          paddingTop: 0,
          ...firstSectionBlock,
        }}
      >
        <FirstSection {...pageProps} />
      </Grid>

      <Footer {...pageProps} />
    </Grid>
  );
}

const PORTFOLIO_SCREENSHOT_LABEL =
  "Screenshot of the Paper Trading Simulator app showing a portfolio view with stock holdings, tickers, and performance figures.";

const FirstSection = ({ mobile }) => {
  const heroMinHeight = mobile ? 520 : 640;

  return (
    <Grid
      item
      container
      xs={12}
      component="section"
      aria-label="Introduction"
      sx={{
        position: "relative",
        flex: 1,
        overflow: "hidden",
        minHeight: heroMinHeight,
        alignItems: "center",
      }}
    >
      {/* Decorative background: name it for screen readers with role + aria-label */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.85) 100%), url(${portfolio})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        role="img"
        aria-label={PORTFOLIO_SCREENSHOT_LABEL}
      />
      <Grid
        container
        item
        xs={12}
        sx={{
          position: "relative",
          zIndex: 1,
          py: 4,
          px: 2,
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={10} lg={8} sx={{ px: { xs: 1, sm: 2 }, py: 0 }}>
          <Box sx={{ p: 3 }}>
            <h1
              style={{
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              <span className="boxed-span">Compete </span> with friends
              <br />
              while <span className="boxed-span">learning </span> about the
              stock market.
            </h1>
            <h1
              style={{
                marginTop: 24,
                textAlign: "center",
              }}
            >
              <span className="boxed-span">Risk Free!</span>
            </h1>
            <Box
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StoreBadges />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

const TopNav = ({ mobile, tablet, desktop, laptop }) => {
  // const [stickyClass, setStickyClass] = useState("");

  // useEffect(() => {
  //   window.addEventListener("scroll", stickNavbar);
  //   return () => window.removeEventListener("scroll", stickNavbar);
  // }, []);

  // function stickNavbar() {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     //use a percent of the windowheight so can work on mobile
  //     windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
  //   }
  // }

  function goToAppStore() {
    window.open(
      "https://apps.apple.com/us/app/stock-market-kings/id1618162738"
    );
  }

  // function scrollToSection(fromTopDistance) {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: fromTopDistance || 750,
  //       behavior: "smooth",
  //     });
  //   }, 500);
  // }
  return (
    <Grid
      item
      container
      style={{
        height: 80,
        alignItems: "center",
        paddingLeft: 8,
        paddingRight: 8,
        zIndex: 100,
      }}
      //     className={`${stickyClass}`}
    >
      <Grid
        item
        container
        alignItems="center"
        direction={"row"}
        style={{
          height: "80%",
          cursor: "pointer",
        }}
        xs={12}
        md={6}
        onClick={() => {
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }, 500);
        }}
      >
        <img src={appIcon} alt="Stock Logo" style={{ height: "60%" }} />
        <h2 style={{ marginLeft: 8 }}>Paper Trading Simulator</h2>
      </Grid>
    </Grid>
  );
};

function StoreBadges() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, sm: 3 },
        rowGap: { xs: 21, sm: 31 },
        flexWrap: "wrap",
      }}
    >
      <Box
        component="a"
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "inline-block",
          lineHeight: 0,
          "&:focus-visible": {
            outline: "2px solid #ffffff",
            outlineOffset: 4,
            borderRadius: 1,
          },
        }}
        aria-label="Download Paper Trading Simulator free on the App Store"
      >
        <Box
          component="img"
          src={APP_STORE_BADGE_WHITE}
          alt=""
          sx={{
            height: { xs: 44, sm: 50 },
            width: "auto",
            display: "block",
          }}
        />
      </Box>
      {/* <Box
        role="status"
        aria-label="Google Play version is coming soon."
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: 44, sm: 50 },
          px: 2.5,
          py: 1,
          borderRadius: 1,
          border: "1px solid rgba(255,255,255,0.28)",
          bgcolor: "rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.78)",
          fontSize: { xs: "0.875rem", sm: "0.9375rem" },
          fontWeight: 600,
          textAlign: "center",
          maxWidth: 280,
          marginTop: { xs: 22, sm: 50 },
          marginLeft: { xs: 10, sm: 32 },
        }}
      >
        Google Play — Coming soon
      </Box> */}
    </Box>
  );
}

const Footer = ({ mobile }) => {
  return (
    <Grid
      item
      container
      xs={12}
      component="footer"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 4, md: 3 },
        px: 2,
        minHeight: { xs: "auto", md: 160 },
        paddingBottom: 10,
        // borderTop: ".5px solid rgba(255,255,255,0.28)",
      }}
    >
      <Grid
        item
        container
        xs={12}
        md={10}
        sx={{
          flexDirection: mobile ? "column" : "row",
          justifyContent: mobile ? "center" : "space-evenly",
          alignItems: "center",
          rowGap: mobile ? 3 : 0,
          columnGap: mobile ? 0 : 2,
          textAlign: mobile ? "center" : "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: mobile ? "center" : "flex-start",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <h2 style={{ margin: 0 }}>Follow Us On</h2>
          <Box
            component="a"
            href="https://www.twitter.com/Smarket_King/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Paper Trading Simulator on X (Twitter)"
            sx={{ display: "inline-flex", lineHeight: 0, ml: mobile ? 0 : 1 }}
          >
            <Box
              component="img"
              src={twitter}
              className="social-icons"
              alt=""
              sx={{ height: 32, width: "auto", display: "block" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: mobile ? "center" : "flex-start",
            flexWrap: "wrap",
            gap: 0.5,
          }}
        >
          <h2 style={{ margin: 0 }}>Contact Us-</h2>
          <Box
            component="a"
            href="mailto:smarketkings@gmail.com"
            sx={{
              color: "inherit",
              textDecoration: "underline",
              ml: mobile ? 0 : 0.5,
              fontSize: 24,
              wordBreak: "break-word",
            }}
          >
            smarketkings@gmail.com
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
