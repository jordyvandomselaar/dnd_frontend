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

const Wizard = ({match, saveData, characterData}) => {
    const getUrl = url => !!url ? `${match.url}/${url}` : match.url

    return (
        <StyledPaper>
            <Route
                exact
                path={getUrl("")}
                render={props => BasicInformation(
                    {
                        ...props,
                        nextUrl: getUrl("physical-information"),
                        onChange: saveData,
                        characterData,
                    },
                )}
            />

            <Route
                exact
                path={getUrl("physical-information")}
                render={props => PhysicalInformation(
                    {
                        ...props,
                        nextUrl: getUrl("stats"),
                        previousUrl: getUrl(""),
                        onChange: saveData,
                        characterData,
                    })}
            />

            <Route
                exact
                path={getUrl("stats")}
                render={props => Stats(
                    {
                        ...props,
                        nextIcon: "send",
                        nextAction: () => console.log("Done!"),
                        previousUrl: getUrl("physical-information"),
                        onChange: saveData,
                        characterData,
                    })}
            />
        </StyledPaper>
    )
}

export default Wizard
