import './App.css';
import data from './data/dummy-data';
function App() {
  return (
    <div className="App">
      <h1>Spotify Playlist</h1>
      <section>
        <div className='container'>
          <img src={data.album.images[0].url} alt=''/>
          <p>Title : </p>
          <p className='value'>{data.album.name}</p>
          <p>Album : </p>
          <p className='value'>{data.name}</p>
          <p>Artist : </p>
          <p className='value'>{data.artists[0].name}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
