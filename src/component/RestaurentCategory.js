import React from "react"
import ItemList from "./ItemList"
import { useState } from "react"

const RestaurentCategory = ({data, showItems, setShowIndex}) => {


const handleClick = ()=>{
    setShowIndex()
}

    console.log(data)
    return(
        <div>
            <div className="w-6/12 m-auto mt-3 bg-gray-100 p-4 shadow-md ">
                <div className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                {showItems&& <ItemList items={data.itemCards}/>}
            </div>
            
        </div>
    )
} 

export default RestaurentCategory