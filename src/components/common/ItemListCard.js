import React, { useEffect, useState } from 'react'
import './ItemListCard.css'

function ItemListCard(props) {

    const [item, setItem] = useState({name:"", currentPrice:0, regDate : ""})
    
    useEffect(() => {
        fetch(`${makeURL(props.name)}`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => JSON.stringify(res))
        .then(res => console.log(res))
        // .then(res => {
        //     let price = res.rows[0].currentPrice.toString();
        //     let item = {
        //         name : res.rows[0].itemName,
        //         currentPrice : price.substring(0, price.length - 4) + " 만원",
        //         regDate : res.rows[0].regDate,
        //     }
        //     setItem(item)

        // });

        // setInterval(() => {
        //     setItem({name:"", currentPrice:0, regDate : ""})
        //     fetch(`${makeURL(props.name)}`, {
        //         headers : { 
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //            }
        //     })
        //     .then(res => res.json())
        //     .then(res => {
        //         let price = res.rows[0].currentPrice.toString();
        //         let item = {
        //             name : res.rows[0].itemName,
        //             currentPrice : price.substring(0, price.length - 4) + " 만원",
        //             regDate : res.rows[0].regDate,
        //         }
        //         setItem(item)

        //     });
        //     }, 10000)
        
        
    }, [])


    const makeURL = (name , id) => {
        return `/df/auction?itemName=${name}&sort=unitPrice:asc&limit=1&wordType=front&apikey=DoPQtFzzElCIKOk84xbWGWK4yfttinQm`;
    }


    return (
        <div className="ItemListCardItem">
            <div>
                <span>{item.name} : </span>
                <span>{item.currentPrice}</span>
            </div>
            <div className="regData">
                <span>등록일시 : {item.regDate}</span>
            </div>
        </div>
    )
}

export default ItemListCard
