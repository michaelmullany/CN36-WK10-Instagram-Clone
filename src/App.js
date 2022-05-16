import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import { Header } from "./components/headers";
import { Post } from "./components/posts";
import { fetchImages } from "./utils";

import './App.css';

const App = () => {
  const [userInput, setUserInput] = useState();
  const [title, setTitle] = useState();
  const [images, setImages] = useState([]); // Init as array so map understand it's an array if it runs before fetchImages has run

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  const submitHandler = (e) => {    
    e.preventDefault();
    setTitle(userInput);
  }

  return (
    <div className="App">
      <Header title={title} />
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setUserInput(e.target.value)} />
      </form>
      {title ? <h2>You wrote a title</h2> : <h2>Hurry up and write a title</h2>}
      {title && <h2>Hooray</h2>}
      <div id="postContainer">
        {images.map((image, i) => {
          return(
            <Post 
              key={i} 
              imgUrl={image.download_url} 
              imgAlt={`random file from unsplash number ${i}`} 
              username={faker.internet.userName()}
              likes={faker.random.numeric(3)}
              comment={`${faker.random.words().toLowerCase()} ${faker.internet.emoji()}`}
              numComments={faker.random.numeric(1)}
              profilePic={faker.image.people(200, 200, true)}
              timeSince={faker.random.numeric(1)}
              location={`${faker.address.cityName()}, ${faker.address.country()}`}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;


{/* <a target="_blank" href="https://icons8.com/icon/7701/share">Share</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}