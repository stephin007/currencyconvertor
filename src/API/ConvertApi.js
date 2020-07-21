import axios from 'axios';

const URL = 'https://free.currconv.com/api/v7/convert';
const API_KEY = '3700442a92848d1efd10'

export const fetchApi = async(query1, query2) =>{
        const {data} = await axios.get( URL,{
            params : {
                q : {
                    'query1' : query1,
                    'query2' : query2
                },
                compact : 'ultra',
                apiKey : API_KEY
            }
        }
    );

    return data;
}