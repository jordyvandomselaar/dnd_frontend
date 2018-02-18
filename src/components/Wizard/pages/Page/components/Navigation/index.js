import React from "react"
import {Button, Icon, Step, StepLabel, Stepper} from "material-ui"
import NavigationButtonsWrapper from "./components/NavigationButtonsWrapper"
import Wrapper from "./components/Wrapper"

const Navigation = ({previousAction, nextAction, nextIcon, activeStep}) =>
    <Wrapper>
        <Stepper activeStep={activeStep}>
            <Step>
                <StepLabel>Basic Information</StepLabel>
            </Step>
            <Step>
                <StepLabel>Physical Information</StepLabel>
            </Step>
            <Step>
                <StepLabel>Stats</StepLabel>
            </Step>
        </Stepper>

        <NavigationButtonsWrapper>
            <Button className={previousAction ? "" : "opaque"} fab aria-label="previous" color="primary" onClick={previousAction}>
                <Icon>navigate_before</Icon>
            </Button>

            <Button fab aria-label="next" color="primary" onClick={nextAction}>
                <Icon>{nextIcon}</Icon>
            </Button>
        </NavigationButtonsWrapper>
    </Wrapper>

export default Navigation
