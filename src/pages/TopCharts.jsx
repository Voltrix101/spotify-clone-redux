import React, { useEffect, useState } from 'react';
import { Loader, SongCard } from '../components';
import axios from 'axios';

const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

const TopCharts = () => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`${CORS_PROXY}https://api.deezer.com/chart`)
      .then((res) => {
        setTracks(res.data.tracks.data);
        setAlbums(res.data.albums.data);
        setPlaylists(res.data.playlists.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader title="Loading Top Charts..." />;
  if (error) return <div className="text-red-500 text-xl">Failed to load top charts.</div>;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="font-bold text-3xl text-white mb-4">Top Tracks</h2>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {tracks.map((song, i) => (
            <SongCard
              key={song.id}
              song={{
                title: song.title,
                subtitle: song.artist.name,
                images: { coverart: song.album.cover_big },
                key: song.id,
                artists: [{ adamid: song.artist.id }],
              }}
              isPlaying={false}
              activeSong={null}
              data={tracks}
              i={i}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-3xl text-white mb-4">Top Albums</h2>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {albums.map((album) => (
            <div key={album.id} className="w-[200px] bg-white/20 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center shadow-2xl hover:shadow-blue-500/40 transition-all duration-300">
              <img src={album.cover_big} alt={album.title} className="w-full h-48 object-cover rounded-lg mb-2" />
              <div className="text-white font-semibold text-lg text-center truncate w-full">{album.title}</div>
              <div className="text-gray-300 text-sm text-center">{album.artist.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-3xl text-white mb-4">Top Playlists</h2>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="w-[200px] bg-white/20 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center shadow-2xl hover:shadow-blue-500/40 transition-all duration-300">
              <img src={playlist.picture_big} alt={playlist.title} className="w-full h-48 object-cover rounded-lg mb-2" />
              <div className="text-white font-semibold text-lg text-center truncate w-full">{playlist.title}</div>
              <div className="text-gray-300 text-sm text-center">by {playlist.user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCharts;
