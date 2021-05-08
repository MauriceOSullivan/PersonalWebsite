import React, {useState, useEffect} from 'react'
import Amplify, {API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports.js';
import {listLondonPlaces} from '../graphql/queries';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

Amplify.configure(awsconfig);


function London() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetchPlaces();
    }, [])

    const fetchPlaces = async () => {
        try {
            const placesData = await API.graphql(graphqlOperation(listLondonPlaces));
            const placesList = placesData.data.listLondonPlaces.items;
            console.log('placesList', placesList);
            setPlaces(placesList);
        } 
        catch (error) {
            console.log('error on fetching songs', error);
        }
    };
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
    
    const classes = useStyles();
    return (
        
        <div>
            {places.map(places => 
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {places.name} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Address: {places.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Description: {places.description}
                    </Typography>
                    </CardContent>
                    </CardActionArea>
            </Card>
            )}
        </div>
    )
}

export default London;
