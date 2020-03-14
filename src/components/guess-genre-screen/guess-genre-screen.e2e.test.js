import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GuessGenreScreen from './guess-genre-screen.jsx';

configure({adapter: new Adapter()});

const question = {
  type: `genre`,
  genre: `инди-рок`,
  answers: [
    {
      song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `инди-рок`,
    },
    {
      song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `рок`,
    },
    {
      song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `джаз`,
    },
    {
      song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `фолк`,
    },
  ],
};

const playerAnswers = [true, false, false, false];

it(`При выборе жанра песни вызывается коллбэк, в который передаются вопрос и выбранные ответы`, () => {
  const handleGuessGenreAnswer = jest.fn();

  const guessGenreScreen = shallow(
      <GuessGenreScreen
        onAnswer={handleGuessGenreAnswer}
        question={question}
        renderAudioPlayer={() => {}}
      />
  );

  const form = guessGenreScreen.find(`form`);
  const answerInput = guessGenreScreen.find(`input`).at(0);

  answerInput.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(handleGuessGenreAnswer).toHaveBeenCalledTimes(1);
  expect(handleGuessGenreAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(handleGuessGenreAnswer.mock.calls[0][1]).toMatchObject(playerAnswers);
});
