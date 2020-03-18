import {GameType} from '../constants';

const initialState = {
  errorsCount: 0,
  step: -1,
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
      return Object.assign({}, state, {errorsCount: state.errorsCount + action.payload});

    case ActionType.INCREMENT_STEP:
      return Object.assign({}, state, {step: state.step + action.payload});

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
