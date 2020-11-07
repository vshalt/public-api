import {useState, useEffect} from 'react';
import Card from './Card'
import './Random.css'

const Random = () => {
  const [data, setData] = useState({Link: "Loading...", API: "Loading...", Auth: "Loading...", Description: "Loading..."});
  const URL = 'https://api.publicapis.org/random';
  const fetchRandom = () => {
    fetch(URL)
      .then(response => response.json())
      .then(resp => setData(resp.entries[0]))
  }
  useEffect(() => {
    fetchRandom();
  }, [])

  return (<div className="random">
    <Card data={data} onClick={fetchRandom} buttonText="New random API" />
  </div>)
}

export default Random;
