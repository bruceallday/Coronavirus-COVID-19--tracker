import React, { useEffect, useState } from 'react'

import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';

import NewsAPI from 'newsapi'

import ads from '../../../ads'

import { useStyles } from './news.styles'
import { textStyles } from '../../constants/textColor'

const NewsWindow = ({ newsWindow, setNewsWindow }) => {
    const classes = useStyles()
    const textClass = textStyles()
    const [data, setData] = useState(false)

    const newsapi = new NewsAPI('30d46ebe65f441e1a4f4aadd4cfd7199');

    useEffect(() => {
      getData()
    }, [])

    const getData = async () =>{
        const result = await newsapi.v2.topHeadlines({
            q: 'coronavirus',
            language: 'en',
            country: 'us'
        })

        const data = result
        setData(data)
    }

    const formatDate = (date) => {
        let str = new Date(date).toString()
        let frmDate = str.split("(") 
        return frmDate[0]
    }

    // console.log("NEWS DATA", data)

    // console.log(data.articles[0].publishedAt)

    return(
        <div className={classes.root} >
            <ClearIcon
                style={{ color: 'white', position: 'absolute' }}
                onClick={() => {
                    setNewsWindow(!newsWindow)
                }}
            />
              {data && (
                <Card className={classes.newsCard}>
                    <CardActionArea style={{height: '50%'}}>
                        <CardMedia
                            className={classes.media}
                            image={data.articles[0].urlToImage}
                            title={data.articles[0].title}
                        />
                       
                        <CardContent>
                            <p style={{color: 'white', fontSize: 14, fontWeight: 'lighter'}} >{`${formatDate(data.articles[0].publishedAt)}`}</p>
                            <div style={{ color: 'white', padding: 5, fontSize: 21 }} variant="p">
                                {`${data.articles[0].title}`}
                            </div>
                            <CardActions>
                                <Button className={textClass.linkText} href={`${data.articles[0].url}`} > Full story </Button>
                            </CardActions>
                        </CardContent>

                    </CardActionArea>
                </Card>
            )}
        </div>
    )
}

export default NewsWindow