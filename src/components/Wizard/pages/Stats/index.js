import React from "react"
import Page from "../Page"
import {TextField} from "material-ui"

const Stats = (props) => (
    <Page title="Let's get some stats down." {...props}>
        {TextField({
            id: "strength",
            label: "Strength",
            type: "number",
            value: props.characterData["strength"] || "",
            onChange: event => props.onChange("strength", event.target.value)
        })}
        {TextField({
            id: "constitution",
            label: "Constitution",
            type: "number",
            value: props.characterData["constitution"] || "",
            onChange: event => props.onChange("constitution", event.target.value)
        })}
        {TextField({
            id: "dexterity",
            label: "Dexterity",
            type: "number",
            value: props.characterData["dexterity"] || "",
            onChange: event => props.onChange("dexterity", event.target.value)
        })}
        {TextField({
            id: "intelligence",
            label: "Intelligence",
            type: "number",
            value: props.characterData["intelligence"] || "",
            onChange: event => props.onChange("intelligence", event.target.value)
        })}
        {TextField({
            id: "wisdom",
            label: "Wisdom",
            type: "number",
            value: props.characterData["wisdom"] || "",
            onChange: event => props.onChange("wisdom", event.target.value)
        })}
        {TextField({
            id: "charisma",
            label: "Charisma",
            type: "number",
            value: props.characterData["charisma"] || "",
            onChange: event => props.onChange("charisma", event.target.value)
        })}
    </Page>
)

export default Stats
