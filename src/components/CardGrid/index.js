import React from "react"
import {Card, CardContent, CardMedia, Grid, Typography} from "material-ui"
import styled from "styled-components"

const StyledCardMedia = styled(CardMedia)`
  height: 100px;
`

const CardGrid = ({items}) => (
    <Grid container>
        {
            items.map((item, i) => (
                <Grid item xs={12} md={3} key={i}>
                    <Card>
                        <StyledCardMedia
                            image={item.image}
                        />

                        <Typography component="h3"><strong>{item.title}</strong></Typography>

                        <CardContent>
                            {item.children}
                        </CardContent>
                    </Card>
                </Grid>
            ))
        }
    </Grid>
)

export default CardGrid
