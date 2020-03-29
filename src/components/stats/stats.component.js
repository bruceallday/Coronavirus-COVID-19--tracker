import React from 'react'

import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

import ads from '../../../ads'

import { useStyles } from './stats.styles'

const StatsWindow = ({ statsWindow, setStatsWindow }) => {
    const classes = useStyles()

    return(
        <div className={classes.root} >
        <Card>
            <Card className={classes.statsCard} >
                <ClearIcon
                    style={{ color: 'white' }}
                    onClick={() => {
                        setStatsWindow(!statsWindow)
                    }}
                />
                <CardActionArea>
                    <CardMedia
                        style={{ height: '30%', backgroundColor: 'blue'}}
                        title="Title"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Coming soon
                        </Typography>

                       {/* <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography> */}
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>

                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>      
            </Card>
            </Card>
        </div>

    )
}

export default StatsWindow