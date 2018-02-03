import React, {Fragment} from "react"
import {Helmet} from "react-helmet"
import {Drawer, withStyles} from "material-ui"
import MenuItem from "./components/MenuItem"
import styled from "styled-components"
import routes from "../../../routes"


const drawerWidth = "240px"

const styles = theme => ({
    paper: {
        width: drawerWidth,
    },
})

const Container = styled.main`
  margin-left: ${drawerWidth};
`


const Main = ({children, classes}) => (
    <Fragment>
        <Helmet>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <title>Dungeons and Dragons</title>
        </Helmet>

        <Drawer classes={{paper: classes.paper}} type="permanent">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to={routes.characters_index.path}>Characters</MenuItem>
        </Drawer>

        <Container>
            {children}
        </Container>
    </Fragment>
)

export default withStyles(styles)(Main)
