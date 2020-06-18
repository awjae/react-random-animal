import React, { useState, useEffect } from 'react'
import ListCard from '../common/ListCard';

function LandingPage() {

    const [Animals, setAnimals] = useState([])

    useEffect(() => {
      const animals = [
        {
          name : "개",
          en_name : "dog"
        },
        {
          name : "고양이",
          en_name : "cat"
        },
        {
          name : "여우",
          en_name : "fox"
        },
        {
            name : "팬더",
            en_name: "panda"
        }
      ]
      setAnimals(animals)
  
    }, [])

    return (
        <>
        {Animals && Animals.map((animal, index) => (
            <React.Fragment key = { index }>
                <ListCard
                name={animal.name}
                en_name={animal.en_name}
                >
                </ListCard>
            </React.Fragment>
        ))}
        </>
    )
}

export default LandingPage
