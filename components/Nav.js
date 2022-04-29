import React from 'react'
import Link from 'next/link'

function Nav({ title, handleSearchClick }) {
    return (
        <div className="nav">
            <span className="material-icons">menu</span>

            <Link href="/" passHref>
                <h1 className="logo">{title || 'Food in Town'}</h1>
            </Link>

            <span className="material-icons" onClick={handleSearchClick}>
                search
            </span>
        </div>
    )
}

export default Nav
