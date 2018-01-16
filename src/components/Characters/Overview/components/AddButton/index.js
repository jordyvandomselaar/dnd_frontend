import React from "react"
import {Button} from "material-ui"
import styled from "styled-components"
import AddIcon from "material-ui-icons/Add"
import {withRouter} from "react-router-dom"
import routes from "../../../../../routes"

const AddButtonContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
`

const AddButton = ({history}) => (
    <AddButtonContainer>
        <Button fab color="primary" aria-label="add" onClick={() => history.push(routes.wizard_index.path)}><AddIcon/></Button>
    </AddButtonContainer>
)

export default withRouter(AddButton)
