import { useState } from "react"

const Filter = ({handleFilter}) =>{

    const [titleToFilter,setTitleToFilter] = useState('')
    const [ratingToFilter,setRatingToFilter] = useState('')

    const handleTitle = (e) => {
        setTitleToFilter(e.target.value)
    }
    const handlNote = (e) =>{
        setRatingToFilter(e.target.value)
    }

    return (
        <div>
        <label htmlFor=""> Filter : </label>
        <input type="text" value={titleToFilter} placeholder="title" onChange={handleTitle}/>
        <input type="number" value={ratingToFilter} placeholder="1" onChange={handlNote} />
        <button onClick={() => handleFilter(titleToFilter, ratingToFilter)}>Filter</button>
        </div>
    )
}

export default Filter;