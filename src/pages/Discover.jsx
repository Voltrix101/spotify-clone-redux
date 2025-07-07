import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { fetchDeezerTopTracks } from '../redux/services/deezer';

const Discover = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchDeezerTopTracks()
      .then((data) => {
        setTracks(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover Top Tracks</h2>
      </div>
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
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={tracks}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
