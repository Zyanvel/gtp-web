import React from 'react';
import {Link} from 'react-router-dom'
import './WorkingWithUsBanner.css'

function WorkingWithUsBanner(props) {
    return (
        <div className='workingwithusbanner__div'>
            <Link to='/aboutus'><p className='workingwithusbanner__p'>Working With Us</p></Link>
        </div>
    );
}

export default WorkingWithUsBanner;