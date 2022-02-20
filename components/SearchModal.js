import React from 'react'
import SearchIcon from '../assets/search-outline.svg'
import Image from 'next/image'
import SearchItem from './SearchItem'
import { dummy_data } from './dummy_data'

const SearchModal = () => {
    return (
        <div className="search_modal">
            <form className="search_bar">
                <label className="search_icon" htmlFor="search">
                    <Image src={SearchIcon} alt="Search icon" />
                </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search restaurants"
                />
            </form>
            <div className="search_content">
                <h1>Restaurants</h1>
                {dummy_data.map((entry, idx) => (
                    <SearchItem key={idx} name={entry} />
                ))}
            </div>
        </div>
    )
}

export default SearchModal
