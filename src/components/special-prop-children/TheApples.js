function Apples(props){
    return(
        <div className="promo-section">
            <div>
                <h2>These Apples are : {props.color}</h2>
            </div>
            <div>
                <h3>There are {props.number} Apples</h3>
            </div>
        </div>    
        )
}

export default Apples;