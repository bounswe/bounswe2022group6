import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div class="center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button class="primary-button">Log out</button>
            </Link>

            <Link to="/profile">
                <button className="primary-button"> Your Profile</button>
            </Link>
        </div>
    )
}