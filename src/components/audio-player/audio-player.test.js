import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

const song = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

it(`Компонент «AudioPlayer» рендерится корректно`, () => {
  const tree = renderer
    .create(
        <AudioPlayer
          src={song}
          isPlaying={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
