import './singlePlanetPage.css';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const getKey = (setKey) => {
  axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
      .then(response => {
          setKey(response.data.key);
      })
      .catch(error => console.log(error));
}

const getPlanets = (key, setPlanets) => {
  if(key === '') {
      setPlanets([]);
  } else {
      axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
          headers : { 'x-zocom' : key }
          })
          .then(response => {
              setPlanets(response.data.bodies);
          })
          .catch(error => console.log(error));
  }
}


function SinglePlanetPage() {
    const [key, setKey] = useState('');
    const [planets, setPlanets] = useState([]);
    const [planet, setPlanet] = useState({
    name : '',
    id: 0
    });

    useEffect(() => {
        getKey(setKey);
    }, []);

    useEffect(() => {
        getPlanets(key, setPlanets);
    }, [key]);

    useEffect(() => {

    }, [planets]);

    const { id } = useParams();

    useEffect(() => {
    console.log(planets);
    }, []);

    return (
        <h1>Single Planet Page #{ id }</h1>
    )
}

export default SinglePlanetPage;
