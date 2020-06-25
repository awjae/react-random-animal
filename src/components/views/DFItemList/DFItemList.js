import React, { useState, useEffect } from 'react'
import ItemListCard from '../../common/ItemListCard';

function DFItemList() {

    const [Items, setItems] = useState([])

    useEffect(() => {
      const items =  [ {
        "itemId" : "dc921c3dc8be1a9bbc7564e22bfdee6d",
        "itemName" : "사도 강림 플래티넘[30Lv]",
        "itemRarity" : "레어",
        "itemType" : "액세서리",
        "itemTypeDetail" : "칭호",
        "itemAvailableLevel" : 1
      }, {
        "itemId" : "6a1d8ac869a253e803d47c7401cac0f2",
        "itemName" : "사도 강림 플래티넘[35Lv]",
        "itemRarity" : "레어",
        "itemType" : "액세서리",
        "itemTypeDetail" : "칭호",
        "itemAvailableLevel" : 1
      }, {
        "itemId" : "a3f87f183be295accf006d92838ddec0",
        "itemName" : "사도 강림 플래티넘[40Lv]",
        "itemRarity" : "레어",
        "itemType" : "액세서리",
        "itemTypeDetail" : "칭호",
        "itemAvailableLevel" : 1
      }, {
        "itemId" : "00b232b4d50a58f8489977ade65c98c4",
        "itemName" : "사도 강림 플래티넘[45Lv]",
        "itemRarity" : "레어",
        "itemType" : "액세서리",
        "itemTypeDetail" : "칭호",
        "itemAvailableLevel" : 1
      }, {
        "itemId" : "6fd2abf244ac1a24b4db9478172efc84",
        "itemName" : "사도 강림 플래티넘[60Lv]",
        "itemRarity" : "레어",
        "itemType" : "액세서리",
        "itemTypeDetail" : "칭호",
        "itemAvailableLevel" : 1
      }, {
        "itemId" : "1ee1887f61ff71b2c5d6b921b790d24c",
        "itemName" : "사도 강림 플래티넘[70Lv]",
        "itemRarity" : "레어",
        "itemType" : "액세서리",
        "itemTypeDetail" : "칭호",
        "itemAvailableLevel" : 1
      }, {
        "itemId" : "547acebf8ce25f264e2d4ebfa1fa931b",
        "itemName" : "사도 강림 플래티넘[75Lv]",
        "itemRarity" : "레어",
        "itemType" : "액세서리",
        "itemTypeDetail" : "칭호",
        "itemAvailableLevel" : 1
      }, {
        "itemId" : "92965307da537ad75d61f6110b6a6b6c",
        "itemName" : "사도 강림 플래티넘[80Lv]",
        "itemRarity" : "레어",
        "itemType" : "액세서리",
        "itemTypeDetail" : "칭호",
        "itemAvailableLevel" : 1
      } ];
      setItems(items)
  
    }, [])

    return (
        <>
        {Items && Items.map((item, index) => (
            <React.Fragment key = { index }>
                <ItemListCard
                name = {item.itemName}
                id = {item.itemId}
                >
                </ItemListCard>
            </React.Fragment>
        ))}
        </>
    )
}

export default DFItemList
