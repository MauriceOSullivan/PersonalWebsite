import React, {useState, useEffect} from 'react'
import Amplify, {API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports.js';
import {listLondonPlaces} from '../graphql/queries';
import { getLondonPlace } from '../graphql/queries';
Amplify.configure(awsconfig);


function London() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const placesData = await API.graphql(graphqlOperation(listLondonPlaces));
                const placesList = placesData.data.listLondonPlaces.items;
                console.log('placesList', placesList);
                getLondonPlace(placesList);
                console.log('places list', placesList)
                setPlaces(placesList)
            } 
            catch (error) {
                console.log('error on fetching songs', error);
            }
        };
        fetchPlaces();
        console.log('places array', places)
    }, [])

    return (
        <div className='placesList'>
            {places.map(place => {
                <div> Name: {place.name} Address: {place.address}</div>
            })}
        </div>
    )
}

export default London;
