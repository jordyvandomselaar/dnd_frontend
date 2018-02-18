import React, {Fragment} from "react"
import {Helmet} from "react-helmet"
import {BottomNavigation, BottomNavigationAction} from "material-ui"
import {Home as HomeIcon, ViewList as ViewListIcon} from "material-ui-icons"
import {withRouter} from "react-router-dom"
import routes from "../../../routes"
import BottomNavigationWrapper from "./components/BottomNavigationWrapper"
import Container from "./components/Container"
import Wrapper from "./components/Wrapper"

const Main = ({children, classes, history}) => {
    const handleNavigation = (event, value) => history.push(value.path)

    return <Fragment>
        <Helmet>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <title>Dungeons and Dragons</title>
        </Helmet>

        <Wrapper>
            <Container>
                {children}
            </Container>

            <BottomNavigationWrapper>
                <BottomNavigation showLabels onChange={handleNavigation}>
                    <BottomNavigationAction value={routes.home} label="Home" icon={<HomeIcon/>}></BottomNavigationAction>
                    <BottomNavigationAction value={routes.characters_index} label="Characters" icon={<ViewListIcon/>}></BottomNavigationAction>
                </BottomNavigation>
            </BottomNavigationWrapper>
        </Wrapper>
    </Fragment>
}

export default withRouter(Main)
