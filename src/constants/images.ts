import unkown_track from '@/assets/unknown_track.png';
import unkown_artist from '@/assets/unkown_artist.png';
import { Image } from 'react-native';

export const unkwongTrackImageUri = Image.resolveAssetSource(unkown_track).uri;
export const unkwongArtistImageUri = Image.resolveAssetSource(unkown_artist).uri;

//Basically when we don't have an image for a track or artist we will use this image, by just using the uri