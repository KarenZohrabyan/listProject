import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Posts({ data }) {
    const { index } = useParams(); 
    const count = useSelector(state => state.posts);
    console.log(count[index]);
    return (
        <div className="unique-post">
            <div className="about">
            <h1 className="post-name">{count[index].name}</h1>
            <h3 className="post-author">{count[index].author}</h3>
            </div>
            <p className="content">{count[index].content}</p>
        </div>
    );
}


export default Posts; 