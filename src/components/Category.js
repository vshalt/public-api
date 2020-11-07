import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Card from './Card'
import './Category.css'

const Category = () => {
    const [category, setCategory] = useState([]);
    const {categoryName} = useParams();
    const URL = `https://api.publicapis.org/entries?category=${encodeURIComponent(categoryName)}`
    const fetchCategory = () => {
        fetch(URL)
            .then(response => response.json())
            .then(resp => setCategory(resp.entries))
    }
    useEffect(() => {
        fetchCategory();
    }, [])
    return (
        <div className="category">
            {category.map((item) => {
                return <Card key={item.Link} data={item} />
            })}
        </div>
    )
}

export default Category;
