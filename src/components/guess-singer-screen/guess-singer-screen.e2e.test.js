import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GuessSingerScreen from './guess-singer-screen.jsx';

configure({adapter: new Adapter()});

const question = {
  type: `singer`,
  song: {
    singer: `X Ambassadors`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      singer: `X Ambassadors`,
      picture: `https://api.adorable.io/avatars/128/1`,
    },
    {
      singer: `Bastille`,
      picture: `https://api.adorable.io/avatars/128/2`,
    },
    {
      singer: `Imagine Dragons`,
      picture: `https://api.adorable.io/avatars/128/3`,
    },
  ],
};

const playerAnswer = {
  singer: `X Ambassadors`,
  picture: `https://api.adorable.io/avatars/128/1`,
};

it(`При выборе исполнителя вызывается коллбэк, в который передаются вопрос и выбранный ответ`, () => {
  const handleGuessSingerAnswer = jest.fn();

  const guessSingerScreen = shallow(<GuessSingerScreen
    onAnswer={handleGuessSingerAnswer}
    question={question}
  />);

  const answerInput = guessSingerScreen.find(`input`).at(0);
  answerInput.simulate(`change`);

  expect(handleGuessSingerAnswer).toHaveBeenCalledTimes(1);
  expect(handleGuessSingerAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(handleGuessSingerAnswer.mock.calls[0][1]).toMatchObject(playerAnswer);
});
