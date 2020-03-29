import React, { useEffect, useState } from 'react'

import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

import NewsAPI from 'newsapi'

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

        const data = result.articles
        if(data.length > 15){
            data.splice((data.length -2), 2)
        }
        setData(data)
    }

    const formatDate = (date) => {
        let str = new Date(date).toString()
        let frmDate = str.split("-0") 
        return frmDate[0]
    }

    const formatTitle = (str) => {
        let fmtStr = str.split("- ")
        return fmtStr[0]
    }

    console.log("NEWS DATA", data)

    return(
        <div className={classes.root} >
            <ClearIcon
                className={classes.icon}
                style={{position: 'fixed', color: 'white', zIndex: 999}}
                onClick={() => {
                    setNewsWindow(!newsWindow)
                }}
            />
         
            {data && data.map((item, index) => {
                
                return(
                    <Card key={index} className={classes.newsCard}>
                        <CardActionArea href={`${item.url}`} style={{ height: '50%' }}>
                            <CardMedia
                                className={classes.media}
                                image={item.urlToImage}
                                title={item.title}
                            />
                            <CardContent>
                                <p className={classes.paragraphText} >{`${formatDate(item.publishedAt)}`}</p>
                                <div className={classes.heading} variant="p">
                                    {`${formatTitle(item.title)}`}<span className={classes.paragraphText} >{`- ${item.source.name}`}</span>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    )
                }) 
            }
        </div>
    )
}

export default NewsWindow