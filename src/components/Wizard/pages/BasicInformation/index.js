import React from "react"
import {Grid} from "material-ui"
import Page from "../Page/index"
import TextField from "../../components/TextField/index"

const BasicInformation = (props) => (
    <Page title="Let's get started with the basics first." {...props}>
        <Grid container>
            {TextField({
                id: "name",
                label: "Name",
                value: props.characterData["name"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "class",
                label: "Class",
                value: props.characterData["class"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "race",
                label: "Race",
                value: props.characterData["race"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "alignment",
                label: "Alignment",
                value: props.characterData["alignment"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "deity",
                label: "Deity",
                value: props.characterData["deity"] || "",
                onChange: props.onChange,
            })}
        </Grid>
    </Page>
)

export default BasicInformation
