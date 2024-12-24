let heading = React.createElement("div", {id: "child-div", class:"div-class"},
    React.createElement('h1', {}, "HELLO WORLD")
)
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)