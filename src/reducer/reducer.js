import {GameType} from '../constants';
import questions from '../mocks/questions';

const initialState = {
  errorsCount: 0,
  errorsCountMax: 3,
  step: -1,
  questions,
};

const ActionType = {
  INCREMENT_ERRORS_COUNT: `INCREMENT_ERRORS_COUNT`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};

const isArtistAnswerCorrect = (question, answer) => answer.artist === question.song.artist;
const isGenreAnswerCorrect = (question, answer) => (
  answer.every((it, index) => it === (question.answers[index].genre === question.genre))
);

const ActionCreator = {
  incrementErrorsCount: (question, answer) => {
    let isAnswerCorrect = false;

    switch (question.type) {
      case GameType.GUESS_ARTIST:
        isAnswerCorrect = isArtistAnswerCorrect(question, answer);
        break;

      case GameType.GUESS_GENRE:
        isAnswerCorrect = isGenreAnswerCorrect(question, answer);
        break;

      default:
        // no default
    }

    return {
      type: ActionType.INCREMENT_ERRORS_COUNT,
      payload: isAnswerCorrect ? 0 : 1,
    };
  },
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_ERRORS_COUNT:
      const errorsCount = state.errorsCount + action.payload;

      if (errorsCount >= state.errorsCountMax) {
        return Object.assign({}, initialState);
      }

      return Object.assign({}, state, {errorsCount});

    case ActionType.INCREMENT_STEP:
      const nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return Object.assign({}, initialState);
      }

      return Object.assign({}, state, {step: nextStep});

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
