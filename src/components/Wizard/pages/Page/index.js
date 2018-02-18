import React, {Fragment} from "react"
import {Typography} from "material-ui"
import Navigation from "./components/Navigation"

const Page = props => {
    let {title, children, nextUrl, history, nextAction, nextIcon, previousUrl, activeStep} = props

    nextAction = nextAction !== undefined ? nextAction : () => history.push(nextUrl)
    nextIcon = nextIcon !== undefined ? nextIcon : "navigate_next"

    const previousAction = previousUrl ? () => history.push(previousUrl) : undefined

    return (
        <Fragment>
            <Typography component="h2" type="headline">{title}</Typography>

            {children}

            <Navigation
                {...props}
                previousAction={previousAction}
                nextAction={nextAction}
                nextIcon={nextIcon}
            />
        </Fragment>
    )
}

export default Page
