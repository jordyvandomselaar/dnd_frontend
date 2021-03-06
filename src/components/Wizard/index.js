import React from "react"
import {Paper} from "material-ui"
import {Route} from "react-router-dom"
import BasicInformation from "./pages/BasicInformation/index"
import PhysicalInformation from "./pages/PhysicalInformation/index"
import Stats from "./pages/Stats/index"
import styled from "styled-components"

const StyledPaper = styled(Paper)`
  padding: 10px;
`

const baseUrl = "/characters/wizard"

const pages = [
    {
        url: baseUrl,
        component: BasicInformation,
    },
    {
        url: `${baseUrl}/physical-information`,
        component: PhysicalInformation,
    },
    {
        url: `${baseUrl}/stats`,
        component: Stats,
        nextAction: () => console.log("Done!"),
        nextIcon: "send",
    },
]

const getNextUrl = index => pages[++index] ? pages[index].url : undefined
const getPreviousUrl = index => pages[--index] ? pages[index].url : undefined

const Wizard = (wizardProps) => {
    const routeComponents = pages.map(({url, component, nextIcon, nextAction}, i) =>
        <Route
            exact
            path={url}
            key={i}
            render={props => component({
                ...props,
                ...wizardProps,
                nextIcon,
                nextAction,
                nextUrl: getNextUrl(i),
                previousUrl: getPreviousUrl(i),
                activeStep: i,
            })}
        />)

    return (
        <StyledPaper>
            {routeComponents}
        </StyledPaper>
    )
}

export default Wizard
