import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'
import './Categories.css'

const Categories = () => {
    const [category, setCategory] = useState([])
    const URL = 'https://api.publicapis.org/categories';
    const fetchCategories = () => {
        fetch(URL)
            .then(response => response.json())
            .then(resp => setCategory(resp))
    }
    useEffect(() => {
        fetchCategories();
    }, [])
    return (
        <div className="categories">
            {category.map((item) => {
                return (
                    <div className="single-category">
                        <Link to={`category/${item}`}>
                            <Card key={item} cardClass={true} data={{ heading: item }} />
                        </Link >
                    </div>
                )
            })}
        </div >)
}

export default Categories;
