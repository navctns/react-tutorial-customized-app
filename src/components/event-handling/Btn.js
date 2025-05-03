// function Btn (){
//     const clickHandler = () => console.log('Button clicked!');
//     return (
//         <button onClick={clickHandler}>Click me!</button>
//     )
// }

// export default Btn;
// function Btn (){
//     const clickHandler = () => console.log('Mouse over!');
//     return (
//         <button onMouseOver={clickHandler}>Click me!</button>
//     )
// }

// export default Btn;
function Btn (){
    const clickHandler = () => console.log('Mouse Leave!');
    return (
        <button onMouseLeave={clickHandler}>Click me!</button>
    )
}

// Event Handling - Different expressions

// Using inline anonymous ES5 functions
//   <button onClick={function(){console.log('Button clicked!')}}>Click me!</button>

// Using inline anonymous ES6 arrow functions
//   <button onClick={() => console.log('Button clicked!')}>Click me!</button>

//using separatate function
// function ThirdExample(){
//     console.log('Third example - Button clicked!');
// }
// <button onClick={ThirdExample}>Click me!</button>

// Using a separate ES6 arrow function

// const FourthExample = () => console.log('Fourth example - Button clicked!');
// <button onClick={FourthExample}>Click me!</button>

export default Btn;