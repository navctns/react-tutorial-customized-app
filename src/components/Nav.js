function Nav(){
    return(
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function NavDynamic(props){
    return(
        <nav className="main-nav">
            <ul>
            {props.items.map((item, index) => (
                <li key={index}>{item}</li> // Always use a unique key when mapping
            ))}
            </ul>
        </nav>
    )
}

export default NavDynamic;