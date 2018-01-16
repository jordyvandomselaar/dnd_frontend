import React from "react"
import {Grid, TextField as MdTextField} from "material-ui"

const TextField = ({id, label, onChange, value, type}) => (
    <Grid item xs={12}>
        {
            MdTextField({
                id,
                label,
                type,
                value: value || "",
                onChange: event => onChange(id, event.target.value),
                fullWidth: true,
            })
        }
    </Grid>

)

export default TextField
