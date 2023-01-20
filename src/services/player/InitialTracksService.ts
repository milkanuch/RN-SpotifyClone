import TrackPlayer, { RepeatMode } from 'react-native-track-player';

import { SongProps } from 'types/song';

export const QueueInitialTracksService = async (
  playlist: SongProps[],
): Promise<void> => {
  TrackPlayer.reset();

  await TrackPlayer.add(
    playlist.map((item: SongProps): SongProps => {
      return {
        url: item.url,
        artist: item.artist,
        artwork: item.artwork,
        title: item.title,
        id: item.id,
      };
    }),
  );

  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
