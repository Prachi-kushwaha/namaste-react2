import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header"
import Body from "./src/component/Body"

const AppLayout = ()=>{
    return (
        <>
         <Header/>
      <Body/>
        </>
     
    )
}

// const heading = React.createElement(
//     "div",
//     {id:"parent"},
//     [    
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1", {}, "hello pri" ),
//         React.createElement("h2", {}, "hello pri2" )]
//         ),
        
//     React.createElement(
//         "div",
//         {id:"child2"},
//         [React.createElement("h1", {}, "hello pri" ),
//         React.createElement("h2", {}, "hello pri2" )]
//         )
//     ]
    
//  )
// // jsx code
// const jsxheading = <h1>it is a jsx inside react</h1>

// const Title = ()=> (
//     <h1 className="head" tabIndex='5'>
//        Namaste React using jsx
//     </h1>
// )

// // functional component
//  const FunctionalComponent = ()=>(
//     <div id="container">
//         <Title/>  // this is a react composition injecting one react element into another react element
//  <h1>Namaste React functionalComponent</h1>
//     </div>
    
//  )
//  console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)


{/* <div id="parent">
    <div id="child">
        <h1>hello pri</h1>
    </div>
</div> */}

// const heading = React.createElement("h1", {}, "hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

export default AppLayout;