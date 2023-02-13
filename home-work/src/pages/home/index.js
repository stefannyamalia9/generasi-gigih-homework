import Button from '../../components/button';
import TrackList from '../../components/tracks';
import data from '../../data/dummy-data';

const Homepage = () => {
    return(
        <div>
            <h1>Spotify Playlist</h1>
      <section>
        <TrackList
          src={data.album.images[0].url}
          title={data.album.name}
          album={data.name}
          artist={data.artists[0].name}
        />
        <Button name="Select" />
      </section>
        </div>
    )
}

export default Homepage;