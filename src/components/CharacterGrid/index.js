import React from "react"
import {Card, CardContent, CardMedia, Grid, Typography} from "material-ui"
import styled from "styled-components"
import {Link} from "react-router-dom"

const StyledCardMedia = styled(CardMedia)`
  height: 100px;
`

const CharacterGrid = ({characters}) => (
    <Grid container>
        {
            characters.map((character) => (
                <Grid item xs={12} md={3} key={character.id}>
                    <Card>
                        <StyledCardMedia
                            image={character.image}
                        />

                        <Link to="/"><Typography component="h3" align="center"><strong>{character.name}</strong></Typography></Link>

                        <CardContent>
                            {character.children}
                        </CardContent>
                    </Card>
                </Grid>
            ))
        }
    </Grid>
)

export default CharacterGrid
