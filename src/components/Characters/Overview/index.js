import React from "react"
import CharacterList from "./components/CharacterList"
import AddButton from "./components/AddButton"
import Container from "./components/Container"
import CharacterListWrapper from "./components/CharacterListWrapper"

const Overview = () => (
    <Container>
        <CharacterListWrapper>
            <CharacterList/>
        </CharacterListWrapper>

        <AddButton></AddButton>
    </Container>
)

export default Overview
