import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div class="center">
            <Link to="/">
                <button class="primary-button">Log out</button>
            </Link>
        </div>
    )
}