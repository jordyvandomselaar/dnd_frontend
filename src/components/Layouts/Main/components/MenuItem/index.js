import React from "react"
import {MenuItem as MdMenuItem} from "material-ui"
import {withRouter} from "react-router-dom"

const redirect = (history, url) => history.push(url)

const MenuItem = ({to, history, children}) => (
    <MdMenuItem onClick={() => redirect(history, to)}>{children}</MdMenuItem>
)

export default withRouter(MenuItem)
