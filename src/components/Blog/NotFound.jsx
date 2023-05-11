import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
function NotFound() {
  return (
    <div className='not-found'>
        <h2>Page Not Found</h2>
        <div>
        <Link to ="/" >Go Home</Link>
        </div>
    </div>
  )
}

export default NotFound