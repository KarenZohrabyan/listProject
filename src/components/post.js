import React from 'react';
import { Link } from 'react-router-dom';

function Post({ data }) {
    return (
        <div className="post-container">
            {data.length > 0 ?
                data.map((elem, index) => <div key={index} className="post-item">
                    <h2 className="name">{elem.name}</h2>
                    <p>{elem.date}</p>
                    <p>{elem.author}</p>
                </div>)
                : <div>Вы пока не создали ни одной записи, <Link to='/add-post'>Создайте одну</Link></div>}
        </div>
    );
}


export default Post