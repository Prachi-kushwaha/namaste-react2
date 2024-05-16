import React from "react"
import ReactDOM from "react-dom"

const heading = React.createElement(
    "div",
    {id:"parent"},[
        
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1", {}, "hello pri" ),
        React.createElement("h2", {}, "hello pri2" )]
        ),
        
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1", {}, "hello pri" ),
        React.createElement("h2", {}, "hello pri2" )]
        )
    ]
 )
 console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)


{/* <div id="parent">
    <div id="child">
        <h1>hello pri</h1>
    </div>
</div> */}

// const heading = React.createElement("h1", {}, "hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)