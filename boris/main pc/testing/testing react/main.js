const Bestthingever = () =>{
    return(
        <div>
            <h1>
                chanel 5
            </h1>
            <img width="100" height="100" src="https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9518357119006.jpg"></img>
            <h6>
                500$
            </h6>
        </div>
    )
}

const Header = () => {
    return(
        <div>
        <h1>chanel store</h1>
        <h2>category: shirts</h2> 
        </div>
        
    )
}

const Main = () =>{
    return (
        <div className="flex3">
            <Header />
         <div className="flex1">
            <div className="flex2">
                <Bestthingever />
                <Bestthingever />
                <Bestthingever />
            </div>
            <div className="flex2">
            <Bestthingever />
            <Bestthingever />
            <Bestthingever />
            </div> 
        </div>   
        </div>
        
    )
}

ReactDOM.render(<Main />, document.getElementById('app'))