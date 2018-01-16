import React from "react"
import Page from "../Page/index"
import TextField from "../../components/TextField/index"
import {Grid} from "material-ui"

const Stats = (props) => (
    <Page title="Let's get some stats down." {...props}>
        <Grid container>
            {TextField({
                id: "strength",
                label: "Strength",
                type: "number",
                value: props.characterData["strength"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "constitution",
                label: "Constitution",
                type: "number",
                value: props.characterData["constitution"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "dexterity",
                label: "Dexterity",
                type: "number",
                value: props.characterData["dexterity"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "intelligence",
                label: "Intelligence",
                type: "number",
                value: props.characterData["intelligence"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "wisdom",
                label: "Wisdom",
                type: "number",
                value: props.characterData["wisdom"] || "",
                onChange: props.onChange,
            })}
            {TextField({
                id: "charisma",
                label: "Charisma",
                type: "number",
                value: props.characterData["charisma"] || "",
                onChange: props.onChange,
            })}
        </Grid>
    </Page>
)

export default Stats
