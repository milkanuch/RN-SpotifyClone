import TrackPlayer, { RepeatMode } from 'react-native-track-player';

export const QueueInitialTracksService = async (): Promise<void> => {
  await TrackPlayer.add([
    {
      url: require('assets/sound/once-twice-melody.mp3'),
      title: 'Once Twice Melody',
      artwork:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      artist: 'Beach House',
      album: 'Once Twice Melody',
    },
    {
      url: require('assets/sound/once-twice-melody.mp3'),
      artist: 'Pierce the Veil',
      artwork:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'King for a day',
      album: 'Once Twice Melody',
    },
    {
      url: require('assets/sound/once-twice-melody.mp3'),
      artist: 'Pierce the Veil',
      artwork:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'Props & Mayhem',
      album: 'Once Twice Melody',
    },
    {
      url: require('assets/sound/once-twice-melody.mp3'),
      artist: 'Pierce the Veil',
      artwork:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'The First Punch',
      album: 'Once Twice Melody',
    },
    {
      url: require('assets/sound/once-twice-melody.mp3'),
      artist: 'Pierce the Veil',
      artwork:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'Hold On Till May',
      album: 'Once Twice Melody',
    },
    {
      url: require('assets/sound/once-twice-melody.mp3'),
      artist: 'Pierce the Veil',
      artwork:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'A Match Into Water',
      album: 'Once Twice Melody',
    },
    {
      url: require('assets/sound/once-twice-melody.mp3'),
      artist: 'Pierce the Veil',
      artwork:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'Hell Above',
      album: 'Once Twice Melody',
    },
    {
      url: require('assets/sound/once-twice-melody.mp3'),
      artist: 'Pierce the Veil',
      artwork:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'Bulls In The Brox',
      album: 'Once Twice Melody',
    },
  ]);

  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
