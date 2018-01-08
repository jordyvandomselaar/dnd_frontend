import React from "react"
import {Paper} from "material-ui"
import {Route} from "react-router-dom"
import BasicInformation from "./pages/BasicInformation"
import PhysicalInformation from "./pages/PhysicalInformation"
import Stats from "./pages/Stats"

const Wizard = ({match, saveData, characterData}) => {
    const getUrl = url => `${match.url}/${url}`

    return (
        <Paper>
            <Route
                path={getUrl("basic-information")}
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
                path={getUrl("physical-information")}
                render={props => PhysicalInformation(
                    {
                        ...props,
                        nextUrl: getUrl("stats"),
                        previousUrl: getUrl("basic-information"),
                        onChange: saveData,
                        characterData,
                    })}
            />

            <Route
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
        </Paper>
    )
}

export default Wizard
