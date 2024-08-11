import React from 'react';
import styles from './ConditionalRendering.module.css';
import Link from 'next/link';

const ConditionalRendering = () => {
    let city = ["New York", "Tokyo", "London", "Paris", "Berlin"];
    //city =[];
    //const message = city.length === 0 ? <p> No items found </p> : null 
    /*
    const getMessage  = () => {
    return city.length === 0 ? <p> No items found </p> : null ;;
    }
    */
  
    /*
    if (city.length === 0  )
      return( <>
                <h1>List</h1>
                <p> No item found</p>
              </>
            );
    */
  
    /* Line 30 extra
    //{city.length === 0 ? <p> No items found </p> : null}
    //{message}
    //{getMessage}
    */
  
    city.map((city) => <li>{city}</li>);
    return (
      <>
      <h1>List</h1> 
      {city.length === 0 && <p> No items found </p> }
      <ul className="list-group">
        {city.map((city) => (
           <li className="list-group-item" key={city}> {city}</li>
        ))}
      </ul>
      <br />
      <Link href = "./sideMenu"> Return </Link>
      </>
    );
  }
  
  export default ConditionalRendering;
  