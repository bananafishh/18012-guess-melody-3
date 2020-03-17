const initialState = {
  errorsCount: 0,
  step: -1,
};

const ActionType = {
  INCREMENT_ERRORS_COUNT: `INCREMENT_ERRORS_COUNT`,
  INCREMENT_STEP: `INCREMENT_STEP`,
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

export {reducer, ActionType};
