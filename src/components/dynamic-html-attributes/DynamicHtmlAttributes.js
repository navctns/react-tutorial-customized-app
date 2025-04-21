// const url = '../logo.svg';
// const result = <img src={url} alt={props.alt}></img>;

const ImgItem = props =>{
   return <img src={props.url} alt={props.alt}></img>;
}

export default ImgItem;