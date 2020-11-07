import {useState} from 'react';
import Card from './Card'
import './Home.css'

const Home = () => {
    const [API, setAPI] = useState([])
    const [isOpen, setisOpen] = useState(false)
    const URL = 'https://api.publicapis.org/entries'
    const fetchAPI = () => {
        fetch(URL)
            .then(response => response.json())
            .then(resp => setAPI(resp.entries))
        setisOpen(!isOpen)
    }
    return (
        <div className="home">
            <h1>Welcome to Public API</h1>
            <h2>Go to the categories tab to select any publically available API category</h2>
            <h2>Go to the Random tab to get an API at random</h2>
            <div className="btn-container">
                <button onClick={fetchAPI}>{!isOpen ? 'Show all APIs' : `Hide all APIs(${API.length})`}</button>
            </div>
            <div className="view-entries">
                {isOpen ?
                    API.map((item) => {
                        return <Card key={item.Link} data={item} />
                    })
                    : null}
            </div>
        </div>
    )
}

export default Home;
