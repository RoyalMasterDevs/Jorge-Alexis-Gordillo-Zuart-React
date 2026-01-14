/*function Card(props) {
    return ( 
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </>
     );
}

export default Card;
*/

export default function Card({title, description, price}){
    return(
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </>
    )    
}