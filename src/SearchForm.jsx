import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {

  const { setSearchImage } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value
    setSearchImage(searchValue)
  }
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" className='form-input search-input' name='search' placeholder='dinosaur'/>
        <button type='submit' className='btn'>Search</button>
      </form>
    </section>
  )
}

export default SearchForm