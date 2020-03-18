import {reducer, ActionType, ActionCreator} from './reducer';

const artistQuestion = {
  type: `artist`,
  song: {
    artist: `X Ambassadors`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      artist: `X Ambassadors`,
      picture: `https://api.adorable.io/avatars/128/1`,
    },
    {
      artist: `Bastille`,
      picture: `https://api.adorable.io/avatars/128/2`,
    },
    {
      artist: `Imagine Dragons`,
      picture: `https://api.adorable.io/avatars/128/3`,
    },
  ],
};

const artistCorrectAnswer = {
  artist: `X Ambassadors`,
  picture: `https://api.adorable.io/avatars/128/1`,
};

const artistIncorrectAnswer = {
  artist: `Bastille`,
  picture: `https://api.adorable.io/avatars/128/2`,
};

const genreQuestion = {
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

const genreCorrectAnswer = [true, false, false, false];

const genreIncorrectAnswer = [true, true, false, true];

describe(`Редьюсер работает корректно`, () => {
  it(`Редьюсер, вызванный без аргумента action, возвращает исходное состояние приложения`, () => {
    expect(reducer(void 0, {})).toEqual({
      errorsCount: 0,
      step: -1,
    });
  });

  it(`Редьюсер увеличивает количество совершённых игроком ошибок на переданное значение`, () => {
    expect(reducer({
      errorsCount: 0,
      step: -1,
    }, {
      type: ActionType.INCREMENT_ERRORS_COUNT,
      payload: 1,
    })).toEqual({
      errorsCount: 1,
      step: -1,
    });
  });

  it(`Редьюсер увеличивает шаг игры на переданное значение`, () => {
    expect(reducer({
      errorsCount: 0,
      step: -1,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    })).toEqual({
      errorsCount: 0,
      step: 0,
    });
  });
});

describe(`Action creators работают корректно`, () => {
  it(`Action creator для увеличения шага игры возвращает правильный action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator для увеличения количества совершённых ошибок возвращает payload, равный 0, если исполнитель угадан правильно`, () => {
    expect(ActionCreator.incrementErrorsCount(artistQuestion, artistCorrectAnswer)).toEqual({
      type: ActionType.INCREMENT_ERRORS_COUNT,
      payload: 0,
    });
  });

  it(`Action creator для увеличения количества совершённых ошибок возвращает payload, равный 1, если исполнитель угадан неправильно`, () => {
    expect(ActionCreator.incrementErrorsCount(artistQuestion, artistIncorrectAnswer)).toEqual({
      type: ActionType.INCREMENT_ERRORS_COUNT,
      payload: 1,
    });
  });

  it(`Action creator для увеличения количества совершённых ошибок возвращает payload, равный 0, если жанр угадан правильно`, () => {
    expect(ActionCreator.incrementErrorsCount(genreQuestion, genreCorrectAnswer)).toEqual({
      type: ActionType.INCREMENT_ERRORS_COUNT,
      payload: 0,
    });
  });

  it(`Action creator для увеличения количества совершённых ошибок возвращает payload, равный 1, если жанр угадан неправильно`, () => {
    expect(ActionCreator.incrementErrorsCount(genreQuestion, genreIncorrectAnswer)).toEqual({
      type: ActionType.INCREMENT_ERRORS_COUNT,
      payload: 1,
    });
  });
});
