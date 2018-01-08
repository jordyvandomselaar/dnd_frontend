import React from "react"
import {TextField} from "material-ui"
import Page from "../Page"

const PhysicalInformation = (props) => (
    <Page title="Some physical information" {...props}>
        {TextField({
            id: "size",
            label: "Size",
            value: props.characterData["size"] || "",
            onChange: event => props.onChange("size", event.target.value),
        })}
        {TextField({
            id: "age",
            label: "Age",
            type: "number",
            value: props.characterData["age"] || "",
            onChange: event => props.onChange("age", event.target.value),
        })}
        {TextField({
            id: "gender",
            label: "Gender",
            value: props.characterData["gender"] || "",
            onChange: event => props.onChange("gender", event.target.value),
        })}
        {TextField({
            id: "height",
            label: "Height",
            value: props.characterData["height"] || "",
            onChange: event => props.onChange("height", event.target.value),
        })}
        {TextField({
            id: "weight",
            label: "Weight",
            value: props.characterData["weight"] || "",
            onChange: event => props.onChange("weight", event.target.value),
        })}
    </Page>
)

export default PhysicalInformation
