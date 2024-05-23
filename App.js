import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header"
import Body from "./src/component/Body"
import About from "./src/component/About"
import Error from "./src/component/Error"
import RestaurantMenu from "./src/component/RestaurentMenu"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

const AppLayout = ()=>{
    return (
        <>
         <Header/>
          <Outlet/>
        </>
     
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])

// const heading = React.createElement("h1", {}, "hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

export default AppLayout;