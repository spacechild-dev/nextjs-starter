"use client";

import { useState, useEffect } from "react";

export interface Track {
  name: string;
  artist: { "#text": string };
  album: { "#text": string };
  image: { "#text": string; size: string }[];
  "@attr"?: { nowplaying: string };
}

export const useNowPlaying = () => {
  const [track, setTrack] = useState<Track | null>(null);
  const apiKey = "b196b523ff00d1b3803ae66c3d5d2da5";
  const user = "dagkan";

  const fetchNowPlaying = () => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=1`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (!data.recenttracks) return;
        const latestTrack = data.recenttracks.track[0];
        if (latestTrack && latestTrack["@attr"] && latestTrack["@attr"].nowplaying) {
          setTrack(latestTrack);
        } else {
          setTrack(null);
        }
      })
      .catch(() => setTrack(null));
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  return { track };
};
