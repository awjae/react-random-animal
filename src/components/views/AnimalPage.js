import React, { useEffect, useState } from 'react'
import './AnimalPage.css'

function AnimalPage(props) {

    const { history } = props;
    let en_name = props.match.params.en_name;
    const [ImageURL, setImageURL] = useState([])

    useEffect(() => {
        let key="";
        let RandomAPI="";
        switch (en_name) {
            case "dog" : 
                RandomAPI = `https://random.dog/woof.json`;
                key = "url"
                break; 
            case "cat" : 
                RandomAPI = `https://aws.random.cat/meow`;
                key = "file"
                break; 
            case "fox" : 
                RandomAPI = `https://randomfox.ca/floof/`;
                key = "link"
                break;  
            case "panda" :
                RandomAPI = `https://some-random-api.ml/img/panda`;
                key = "link"
            default:
                break;
        }
        fetch(RandomAPI)
            .then(response => response.json())
            .then(response => {
                setImageURL(response[key])
            })

            setInterval(() => {
                fetch(RandomAPI)
                .then(response => response.json())
                .then(response => {
                    setImageURL(response[key])
                })
            }, 5000)
        

    }, [])

    return (
        <>
            <div className="backButton">
                <a onClick={ () => { history.goBack() } }>&#129044;</a>
            </div>
            <div className="imgDiv">
                {  ImageURL.split('.').pop() !== "mp4" ? 
                    <img className="imgArea" style={{ borderRadius : '20px', maxWidth : '80vw', maxHeight: '80vh' }} src={ ImageURL } alt="img"></img> :
                    <video className="imgArea" style={{ borderRadius : '20px', maxWidth : '80vw', maxHeight: '80vh' }} src={ ImageURL } alt="video"></video>
                    
                }
                
            </div>
        </>
    )
}

export default AnimalPage
