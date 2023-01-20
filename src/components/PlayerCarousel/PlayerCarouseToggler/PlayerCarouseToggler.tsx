import { useAppSelector } from 'store/index';
import { selectIsShown } from 'store/playlistSlice/playlist';

import PlayerCarousel from '../PlayerCarousel';

const PlayerCarouseToggler = () => {
  const isWidgetShown = useAppSelector(selectIsShown);

  return isWidgetShown ? <PlayerCarousel /> : null;
};

export default PlayerCarouseToggler;
