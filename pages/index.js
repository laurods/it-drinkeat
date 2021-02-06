import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TopBar from "../components/TopBar";
import Login from "../components/Login";

function Index() {
  return (
    <div>
      <Head>
        <title>DrinkEat</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <CssBaseline />
      <TopBar />

      <main>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={4}>
              <Login />
            </Grid>
            <Grid item xs={8}>
              <div className="right"></div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Index;
