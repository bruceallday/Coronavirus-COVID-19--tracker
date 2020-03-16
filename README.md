# Covid-19 World tracker
<!-- A collection of my favourite NASA API's brought together using React and Material-UI <br> -->


<!-- ![](./readme-images/apod_img.png)

## Technologies used
* [JS ES6](http://es6-features.org/)
* [React](https://reactjs.org/)
* [JSS](https://cssinjs.org/?v=v10.0.4)
* [Material-UI](https://material-ui.com)
* [NASA Open API'S](https://api.nasa.gov//)

## Media Query Breakpoints

| Device      | Width         | Height        | 
|:-----------:|:-------------:|:-------------:|
| Mobile      | 320           | 568           |
| Tablet      | 768           | 1024          |
| Desktop     | 1240          | 800           |

### React:
JS ES6 

## Page Component Template:
After reiterating over my code structure for the pages I decided the code below was a solid starting template for each page. 

```javascript
const MediaLibrary = () => {

    const classes = useStyles()
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () =>{

        setData(null)
        setLoading(true)

        const result = await fetch(`https://images-api.nasa.gov/search?q=apollo%2011...`)
        const data = await result.json()

        if (data.error) {
            console.log(data.error)
            setLoading(false)
        }else{
            setData(data)
            setLoading(false)
            console.log("DATA", data)
        }
    }

    return(
        <div>
            {isLoading && <LinearProgress/>}
            <PageTitle
                title="PAGE_TITLE"
                subTitle="PAGE_SUBTITLE"
            />
        </div>
    )
}

export default MediaLibrary

```

### PAGES:
Select from some of my favourtie NASA API'S<br>

![](./readme-images/nasa_api.gif)

## Page Title Component Template:
Custom Title and SubTitle component takes the ```title``` and ```subTitle``` as props. Creating a modular, consistent, page title.

```javascript
import React from 'react'
import { useStyles } from './page-title.styles'

const PageTitle = (props) =>{
    const classes = useStyles()

    const { title, subTitle } = props
    return (
      <div className={classes.root}>
        <div className={classes.pageTitle}>
          <span>{title}</span>
        </div>
        <p className={classes.pageSubTitle}>
          <span>{subTitle}</span>
        </p>
      </div>
    );
}

export default PageTitle

```

## Environment
* macOS catalina: 10.15.3
* VS Code: 1.39.1

## Authors
* **Bruce Pouncey** - *Initial work* - [BPouncey](https://github.com/BPouncey)

## License
(MIT)

## Acknowledgments
[RED Academy](https://github.com/redacademy) -->