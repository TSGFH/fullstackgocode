const Header = () =>{
    return(
        <h1 className="flex1">shirts</h1>
    )
}

const Products = () =>{
    return(
        <div className="flex3">
            <div className="flex2">
                <div className="flex4">
                    <h1>Chanel 5 shirt</h1>
                    <img width="250" height="250" src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_788/FSH-1662472988869-03.jpg"></img>
                    <h1>500$</h1>
                </div>
                <div className="flex4">
                    <h1>Chanel zebra</h1>
                    <img width="250" height="250" src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_788/FSH-1662472990405-05.jpg"></img>
                    <h1>750$</h1>
                </div>
                <div className="flex4">
                    <h1>Chanel pink</h1>
                    <img width="250" height="250" src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_788/FSH-1662472991447-07.jpg"></img>
                    <h1>250$</h1>
                </div>
        </div>
        <div className="flex2">

        <div className="flex4">
                    <h1>Chanel MC</h1>
                    <img width="250" height="250" src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_788/FSH-1662472992077-09.jpg"></img>
                    <h1>1000$</h1>
                </div>
                <div className="flex4">
                    <h1>Chanel black on red</h1>
                    <img width="250" height="250" src="https://www.chanel.com/images/t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//cruise-2022-23-12-8857550290974.jpg"></img>
                    <h1>1250$</h1>
                </div>
                <div className="flex4">
                    <h1>Chanel split white</h1>
                    <img width="250" height="250" src="https://www.chanel.com/images/t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//cruise-2022-23-33-8857548259358.jpg"></img>
                    <h1>1500$</h1>
                </div>
                </div>
        </div>
    )
}

const Main = () =>{
    return (
        <div className="superstyle">
        <h3 className="flex1">Chanel Store</h3>
        <Header />
        <Products />
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('app'))