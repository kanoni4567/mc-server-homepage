import React from 'react';
import { withStyles } from '@material-ui/styles';
import facePng from './face.png';
import ServerInfo from './components/ServerInfo'

const styles = {
  root: {
    display:"flex",
    flexDirection: "column",
    height: '100vh',
    backgroundColor: "#fffcd6",
  },
  
  header: {
    // minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "#392F2D",
    flex: '0 0 auto',
  },

  logo: {
    marginTop: "5vh",
    height: "15vh",
    border: "1vmin solid white"
  },
  
  link: {
    color: "#61dafb"
  },

  main: {
    flex: '1 0 auto',
  },

  textHeader: {
    margin: '0.1em'
  },

  textContent: {
    margin: '0.5em'
  }
  
}

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={facePng} className={classes.logo} alt="My face" />
        <h3 className={classes.textHeader}>
          Server IP: 
        </h3>
        <p className={classes.textContent}>52.88.194.245</p>
        <a
          className={classes.link}
          href="/mod-profile.zip"
        >
          Download Custom Profile
        </a>
      </header>
      <div className={classes.main}>
        <ServerInfo />
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
