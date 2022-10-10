import React from 'react'
import memesData from '../memesData.js'

export default function Meme() {

  const [meme, setMeme] = React.useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    }
  )
  // eslint-disable-next-line
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    // get all the array with all the images
    const memesArray = allMemeImages.data.memes
    // get a random number
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // generate a url with the random number as an index
    const url = memesArray[randomNumber].url
    setMeme(prevMeme =>{
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <>
      <main>
        <div className="form">
          <input 
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button
            className="form--button"
            onClick={getMemeImage}
          >
            Get a new meme image
          </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} alt="meme" className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
    
  )
}
