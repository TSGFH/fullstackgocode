const Procdacts = () => {
    return(
        <div>
            <h1>
                מקלדת
            </h1>
         <img width="100" height="100" src="https://m.media-amazon.com/images/I/71suJxdFFEL._AC_SL1500_.jpg">
         </img>
            <h2>
            500$
            </h2>
    
        </div>
    )
} 

const Header = () =>{
    return(
        <div>
        <h1>
        Store   
        </h1>
        <h2>
        Games Shit
        </h2>
        </div>

    )
}

const Main = () =>{
    return (
        <div className="flex3">
            <Header />
      <div  className="flex1">
            <div className="flex2">
            <Procdacts />
            <Procdacts />
            <Procdacts />
                </div>
           
            <div className="flex2">
            <Procdacts />
            <Procdacts />
            <Procdacts />
            </div>
        </div>

        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('app'))