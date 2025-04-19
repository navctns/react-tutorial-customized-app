function formatName(firstName, lastName){
    return firstName + " " + lastName;
}

function ComponentEmbeddedJsx(props){
    return (
        <p>{formatName(props.first,props.last)}</p>
    )
}

export default ComponentEmbeddedJsx;