import React from "react"
import {Grid} from "material-ui"
import Page from "../Page/index"
import TextField from "../../components/TextField/index"

const PhysicalInformation = (props) => (
    <Page title="Some physical information" {...props}>
        <Grid container>
            {TextField({
                id: "size",
                label: "Size",
                value: props.characterData["size"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "age",
                label: "Age",
                type: "number",
                value: props.characterData["age"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "gender",
                label: "Gender",
                value: props.characterData["gender"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "height",
                label: "Height",
                value: props.characterData["height"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "weight",
                label: "Weight",
                value: props.characterData["weight"] || "",
                onChange: props.onChange,
            })}
        </Grid>
    </Page>
)

export default PhysicalInformation
