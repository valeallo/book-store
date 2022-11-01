import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {NavbarLink} from '../Constants/NavbarLink'
import SearchIcon from '@mui/icons-material/Search'
import fantasy from '../BooksData/fantasy.json'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';



const Navbar = () => {
    const [searchTest, setSearchTest] = useState('')
    const [result, setResult] = useState([])
    const [modalSearchTest, setModalSearchTest] = useState(false)
    console.log(result);


    const filterBooks = (array, title) => {
        setResult([]);
        return array.filter((book) => {
            if (title === '') {
                return;
            } else if (
                book.title.toLowerCase().includes(title.toLowerCase())
            )
                setResult((prev) => [...prev, book])// è il metodo per pushare in un arrav. si pseadOperatore per prendere
        })

    }


    return (
        <div className='relative  w-screen'>
            <div className='flex items-center justify-between flex-wrap  bg-[#FF577F] p-4'>
                <div className='flex items-center flex-shrink-0 text-white'>
                <div className=''>
                <AutoStoriesIcon className="fill-current h-8 w-8 mr-2"/>
                <span  style = {{fontFamily:'Brush Script MT'}}className='font-semibold text-4xl tracking-tight mr-10'>Fancy Book Store</span>
                </div>
                <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                    <div className='text-sm lg:flex-grow'>
                { NavbarLink.map((page, index)=>{

                    return(
                        
                        <Link key={index} to={page.link} >
                            <li  className='block mt-4 lg:inline-block lg:mt-0 text-[#fda9bd] hover:text-white mr-4'>{page.title}</li>
                        </Link>
                        

                    )
                } )}
                </div>
                </div>
                </div>
                <div className='mr-5'>
                    <input
                        type='text'
                        placeholder='Search your book'
                        onChange={(e) => setSearchTest(e.target.value)}
                        className='rounded-md'
                    ></input>
                    <button onClick={() => [
                        filterBooks(fantasy, searchTest),
                        setModalSearchTest(true)
                    ]}><SearchIcon className='flex items-center flex-shrink-0 text-white ml-5' /></button>
                </div>

            </div>
                { result.length > 0 && modalSearchTest &&(
                <div className='absolute top-12 right-6 w-[350px] bg-zinc-100 z-10 flex flex-col justify-center  p-4'>
                    <div className='flex justify-end text-xl cursor-pointer' onClick={()=>setModalSearchTest(false)}>
                        &times;
                    </div>
                    <ul>
                        {result && result?.map((book, index) => {
                            return (

                                <li key={index}>{book.title}</li>

                            )

                        })}
                    </ul>
                </div>)}
        </div>
    )
}

export default Navbar