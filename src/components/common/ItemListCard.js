import React, { useEffect, useState } from 'react'
import './ItemListCard.css'
const axios = require('axios');

function ItemListCard(props) {

    const [item, setItem] = useState({name:"", currentPrice:0, regDate : ""})
    
    useEffect(() => {
        // fetch(`${makeURL(props.name)}`, {
        //     headers : { 
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        // .then(res => {
        //     debugger
        // })
        
        axios.get(`/api?url=https://api.neople.co.kr${makeURL(props.name)}`)
        .then(function (res) {
            let price = res.data.rows[0].currentPrice.toString();
            let item = {
                name : res.data.rows[0].itemName,
                currentPrice : price.substring(0, price.length - 4) + " 만원",
                regDate : res.data.rows[0].regDate,
            }
            setItem(item)
        })
        .catch(function (error) {
          console.log(error);
        })

        setInterval(() => {
            setItem({name:"", currentPrice:0, regDate : ""})
            axios.get(`/api?url=https://api.neople.co.kr${makeURL(props.name)}`)
            .then(function (res) {
                let price = res.data.rows[0].currentPrice.toString();
                let item = {
                    name : res.data.rows[0].itemName,
                    currentPrice : price.substring(0, price.length - 4) + " 만원",
                    regDate : res.data.rows[0].regDate,
                }
                setItem(item)
            })
            .catch(function (error) {
              console.log(error);
            })
            }, 10000)
                
    }, [])

    const getRandomInt = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }

    const makeURL = (name , id) => {
        // const APIArr = ["uSjGv0JYaZo8bQ2wwbl0w4mGFz0G1X26", "DoPQtFzzElCIKOk84xbWGWK4yfttinQm", "LCZmYCMwLy17f5iST3Yff2828YYtKTMY", "2g40lIV3jJvMmt0notElhrqJ8H2pBtH0", "ydn6IfUYhjn9cr3l6rFgKkNHTRTTgJF7"];
        // const randomIdx = getRandomInt(0,4);
        return `/df/auction?itemName=${name}`;
        //return `/df/auction?itemName=${name}&sort=unitPrice:asc&limit=1&wordType=front&apikey=${APIArr[randomIdx]}`;
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
