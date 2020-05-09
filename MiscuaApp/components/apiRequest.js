import {AsyncStorage} from 'react-native';
import { location } from './mapInterface'
import  axios  from 'axios';


const _restoreToken = async () => {
    try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
            // Our data is fetched successfully
            axios.defaults.headers.common['Authorization'] = value;
        }
    } catch (error) {
            // Our data is fetched successfully
    }
}

const HOST = 'https://covid19.ieliot.com/' 

export function createMarker (title) {
    _restoreToken();
    var postData = {
        "coor": [location.coords['latitude'], location.coords['longitude']],
        "data": {
            "title": title,
            "description": "descripcion",
            "type": "tipo de lugar",
            "risk": 0
        }
    };
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
            }
    };
    axios.post( `${HOST}` + 'rest/v1/place/', postData, axiosConfig)
    .then(function (response) {
        if (response.status === 200) {
            console.log('Marker Create', response);
        }
    })
    .catch(function (error) {
        console.log(error);
    });

}

export  async function showMarkers() {
    try {
         await _restoreToken();
        let lat = location.coords['latitude'];
        let lon = location.coords['longitude'];
        const url = `${HOST}` +  `rest/v1/place/?lat=${lat}&lon=${lon}&accuracy=1000`
        console.log('la direccion', url)
        const showMark = axios({
            method: "GET",
            url,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(function (response) {
            if (response.status === 200) {
                if (response.data.places === null){
                    response.data.places = []
                }
               console.log('el response.data', response.data.places)
                return response.data;
            }
        })
        .catch((err) => {
            console.log('eror', err);
            return err;
        });
        //console.log('los markers', showMark)
        return showMark;
     } catch (error) {
       console.error(error);
    }
 }
 // haciendo un cambiecillo
