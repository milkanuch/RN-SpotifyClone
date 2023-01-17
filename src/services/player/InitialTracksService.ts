import TrackPlayer, { RepeatMode, Track } from 'react-native-track-player';

export const QueueInitialTracksService = async (
  playlist: Track[],
): Promise<void> => {
  TrackPlayer.reset();

  await TrackPlayer.add(
    playlist.map((item: Track): Track => {
      return {
        url: item.url,
        artist: item.artist,
        artwork: item.artwork,
        title: item.title,
      };
    }),
  );

  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
