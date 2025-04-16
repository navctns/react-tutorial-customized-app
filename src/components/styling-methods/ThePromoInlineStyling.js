function Promo(props){
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px"}}>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    )
};

export default Promo