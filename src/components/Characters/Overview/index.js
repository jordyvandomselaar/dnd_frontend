import React from "react"
import CharacterList from "./components/CharacterList"
import styled from "styled-components"
import AddButton from "./components/AddButton"

const Container = styled.div`
  padding: 10px;
`

const Overview = () => (
    <Container>
        <CharacterList/>

        <AddButton></AddButton>
    </Container>
)

export default Overview
