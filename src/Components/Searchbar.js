import React,{useState} from 'react'
import './searchbar.css'

function Searchbar(props) {
    
    const[term,searchTerm]=useState("");
    const onFormSubmit=(e)=>{
        e.preventDefault()
        props.callback(term)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        searchTerm(e.target.value)
    }
    const refreshPage=(e)=>{
        e.preventDefault()
        window.location.reload();
    }
    console.log(term)
    return (
        <div className="search">
        <div className="logo" onClick={refreshPage}>Barr.</div>
        <div  className="ui search">
            <form onSubmit={onFormSubmit}>
                <div className="ui icon input">
                    <input className="prompt" type="text" value={term} onChange={handleClick} placeholder="Search Igridient..."/>
                    <div onClick={onFormSubmit} className="s_icon"><i className="large search icon" ></i></div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Searchbar
