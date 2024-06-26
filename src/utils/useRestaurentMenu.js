import { useEffect, useState } from "react"
import { MENU_API } from "./contants"


const useRestaurentMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null)

    useEffect(async()=>{
        fetchData()
    },[])
 
    const fetchData = async()=>{
        const data = await fetch(MENU_API + resId )
        const json = await data.json()
        console.log(json)
        setResInfo(json.data)
    }

    return resInfo
}
export default useRestaurentMenu