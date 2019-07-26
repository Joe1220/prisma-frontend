import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo-hooks"
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import client from "../Apollo/Client"

export default () => (
  <ThemeProvider theme={Theme}>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router isLoggedIn={false} />
    </ApolloProvider>
  </ThemeProvider>
);