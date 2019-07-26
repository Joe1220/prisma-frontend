import React from "react";
import { gql } from "apollo-boost"
import { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks"
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`

export default () => {

  const { data } = useQuery(QUERY)

  console.log('check data', data)

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router isLoggedIn={false} />
      </>
    </ThemeProvider>
  )
}