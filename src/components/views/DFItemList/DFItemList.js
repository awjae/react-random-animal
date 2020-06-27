import React, { useState, useEffect } from 'react'
import ItemListCard from '../../common/ItemListCard';
import './DFItemList.css';

function DFItemList() {

    const [Items, setItems] = useState([])
    const [Items2, setItems2] = useState([])

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
      const items2 =  [
        {
        "itemId" : "4c9263717f32fc9d92229c0e0c2cc00c",
        "itemName" : "사도의 강림 히든 칭호 상자",
        "itemAvailableLevel" : 1,
        "itemRarity" : "유니크",
        "itemType" : "스태커블",
        "itemTypeDetail" : "부스터"
        },
        {
          "itemId" : "0b4746b0e5154f5a10912ea022628d6c",
          "itemName" : "SD 프레이-이시스 알",
          "itemAvailableLevel" : 1,
          "itemRarity" : "레어",
          "itemType" : "크리쳐",
          "itemTypeDetail" : "크리쳐",
        },
        {
          "itemId" : "a64d17e4e5bc68180351a56a6ef66f32",
          "itemName" : "SD 이시스-프레이 알",
          "itemAvailableLevel" : 1,
          "itemRarity" : "레어",
          "itemType" : "크리쳐",
          "itemTypeDetail" : "크리쳐",
        },
        {
          "itemId" : "0cbee54bc61d6c14fb550a14e4559b2a",
          "itemName" : "폭풍을 부르는 성녀 글로리아 알",
          "itemAvailableLevel" : 1,
          "itemRarity" : "레어",
          "itemType" : "크리쳐",
          "itemTypeDetail" : "크리쳐",
        },
        {
          "itemId" : "86b2c090a9024cec472dbe24d7c8f77e",
          "itemName" : "뇌광의 사수 빅토리아 알",
          "itemAvailableLevel" : 1,
          "itemRarity" : "레어",
          "itemType" : "크리쳐",
          "itemTypeDetail" : "크리쳐",
        } 
      ];
      setItems2(items2)

    }, [])

    return (
        <div style={{display:"flex"}}>
          <div style={{ marginRight:"20px", maxHeight: "670px", overflowY: "auto",overflowX : "hidden"}}>
              {Items && Items.map((item, index) => (
                <React.Fragment key = { index }>
                    <ItemListCard
                    name = {item.itemName}
                    id = {item.itemId}
                    >
                    </ItemListCard>
                </React.Fragment>
              ))}
          </div>
          <div>
            {Items2 && Items2.map((item, index) => (
              <React.Fragment key = { index }>
                  <ItemListCard
                  name = {item.itemName}
                  id = {item.itemId}
                  >
                  </ItemListCard>
              </React.Fragment>
            ))}
          </div>
          <div className="intro">
              <div>10초마다 갱신 됩니다.</div>
              <div>문의사항 : <a href="https://open.kakao.com/o/seDXFyic">https://open.kakao.com/o/seDXFyic</a></div>
          </div>
        </div>
    )
}

export default DFItemList
