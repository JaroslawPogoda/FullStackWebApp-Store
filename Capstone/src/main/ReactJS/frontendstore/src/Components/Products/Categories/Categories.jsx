//@Objective : list of all categories
//imports
import React,{useContext}from 'react';

import {CatContext} from '../../Layout'

import Select from 'react-select'
//end of Imports
//declaration component Categories
export default function Categories(props) {
    //initialization of useContext CatContex setCategories categories
    const value = useContext(CatContext);
    //declaration and optimizationof optionCat
    const optionCat=[]
    //mapping through all categries
    value.categories.map(option =>{ return optionCat.push( {value: option, label: option})} )
    //changing categories
    const handleChange = (event) =>{
        
        props.setCategories([event.map(value=>value.value)])
    }
    //return
    return(
        <div className="Categories">
            <Select onChange={handleChange} defaultValue={"man's clothing"} options={optionCat}  isMulti={true}/>
            {/* {value.map((category,index) => <Category category={category} key ={index} setActiveCategory={setActiveCategory} />)} */}
        </div>
    )//end of return
}// end of component declaration