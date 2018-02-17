import React, {Fragment} from "react"
import {Button, Icon, Typography} from "material-ui"

const Page = ({title, children, nextUrl, history, nextAction, nextIcon, previousUrl}) => {
    nextAction = nextAction !== undefined ? nextAction : () => history.push(nextUrl)
    nextIcon = nextIcon !== undefined ? nextIcon : "navigate_next"

    const previousAction = () => history.push(previousUrl)

    return (
        <Fragment>
            <Typography component="h2" type="headline">{title}</Typography>

            {children}

            {previousUrl &&
            <Button fab aria-label="previous" color="primary" onClick={previousAction}>
                <Icon>navigate_before</Icon>
            </Button>
            }

            <Button fab aria-label="next" color="primary" onClick={nextAction}>
                <Icon>{nextIcon}</Icon>
            </Button>
        </Fragment>
    )
}

export default Page
