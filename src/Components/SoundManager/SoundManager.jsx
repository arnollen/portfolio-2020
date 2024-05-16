import { Howl } from 'howler';
// , Howler
import btnAudio from '../../Sound/btn_test.mp3';
import topAudio from '../../Sound/top.mp3';

let btn;
let top;
let mySounds;

export function playSound(x, v) {
  btn = new Howl({
    src: [btnAudio],
    loop: false,
    volume: 0.01,
    autoplay: false,
  });
  top = new Howl({
    src: [topAudio],
    loop: false,
    volume: 0,
    autoplay: false,
    delay: 0.5,
  });
  mySounds = [
    [btn],
    [top],
  ];

  const setSound = mySounds[x];
  setSound[0].volume(v);
  setSound[0].seek(0);
  setSound[0].play();
}

export function pauseSound(x) {
  mySounds[x].pause();
}
