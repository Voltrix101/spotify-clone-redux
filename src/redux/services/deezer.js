import axios from 'axios';

const CORS_PROXY = 'https://corsproxy.io/?';

export const fetchDeezerTopTracks = async () => {
  const response = await axios.get(`${CORS_PROXY}https://api.deezer.com/chart`);
  return response.data.tracks.data;
}; 