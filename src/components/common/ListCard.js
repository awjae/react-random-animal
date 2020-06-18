import React from 'react'
import './ListCard.css'

function ListCard(props) {
    return (
        <div className="ListCardItem">
            <a href={`/${props.en_name}`}>
                {props.name} 랜덤 이미지 &#10140;
            </a>
        </div>
    )
}

export default ListCard
