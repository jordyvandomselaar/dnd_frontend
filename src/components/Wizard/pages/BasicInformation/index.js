import React from "react"
import {TextField} from "material-ui"
import Page from "../Page"

const BasicInformation = (props) => (
    <Page title="Let's get started with the basics first." {...props}>
        {TextField({
            id: "name",
            label: "Name",
            value: props.characterData["name"] || "",
            onChange: event => props.onChange("name", event.target.value),
        })}
        {TextField({
            id: "class",
            label: "Class",
            value: props.characterData["class"] || "",
            onChange: event => props.onChange("class", event.target.value),
        })}
        {TextField({
            id: "race",
            label: "Race",
            value: props.characterData["race"] || "",
            onChange: event => props.onChange("race", event.target.value),
        })}
        {TextField({
            id: "alignment",
            label: "Alignment",
            value: props.characterData["alignment"] || "",
            onChange: event => props.onChange("alignment", event.target.value),
        })}
        {TextField({
            id: "deity",
            label: "Deity",
            value: props.characterData["deity"] || "",
            onChange: event => props.onChange("deity", event.target.value),
        })}
    </Page>
)

export default BasicInformation
