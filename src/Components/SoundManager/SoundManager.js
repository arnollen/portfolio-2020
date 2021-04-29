import { Howl, Howler } from 'howler';

import btnAudio from '../../Sound/btn_test.mp3';
import topAudio from '../../Sound/top.mp3';

const btn = new Howl({
  src: [btnAudio],
  loop: false,
  volume: .01,
  autoplay: false,
});

const top = new Howl({
  src: [topAudio],
  loop: false,
  volume: 0,
  autoplay: false,
  delay: .5
});

const mySounds = [
  [btn],
  [top],
];

export function playSound(x, v) {
  const setSound = mySounds[x];
  setSound[0].volume(v);
  setSound[0].seek(0);
  setSound[0].play();
}

export function pauseSound(x) {
  mySounds[x].pause();
}
