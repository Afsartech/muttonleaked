import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Texas",
      artist: "Playboi Carti",
      img_src: "./images/carti.jpg",
      src: "./music/Texas.m4a"
    },
    {
      title: "Real Rockstar",
      artist: "Playboi Carti",
      img_src: "./images/carti.jpg",
      src: "./music/RealRockstar.m4a"
    },
    {
      title: "Jump Out The House OG",
      artist: "Playboi Carti",
      img_src: "./images/carti.jpg",
      src: "./music/JumpOutTheHouse.m4a"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  function changeBg() {
    let background = "#" + ((1<<24)*Math.random() | 0).toString(16);
    document.body.style.backgroundColor = background;
  }

  useEffect(() => {
    setNextSongIndex(() => {

      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1 + changeBg(); 
      }
    });
  }, [currentSongIndex]);

  

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
