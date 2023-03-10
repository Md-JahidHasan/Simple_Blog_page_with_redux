import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByTitle } from '../redux/filter/actionTypes';

const Search = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const handleSearchText = (e) =>{
        setSearchText(e.target.value)
        dispatch(searchByTitle(searchText))
        console.log(searchText);
    }


    return (
        <div
            class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                value={searchText}
                onChange={handleSearchText}
                class="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
            />
            <img
                class="inline h-6 cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lFHjxVqB442pzvxNWvEyAq5cpn4lewheKJn2bKJdvKwWgfPB0BW6oocgGcE4G22_31s&usqp=CAU"
                alt="Search"
            />
        </div>
    );
};

export default Search;