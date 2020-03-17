import {reducer, ActionType, ActionCreator} from './reducer';

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
  it(`Action creator для увеличения количества совершённых ошибок возвращает правильный action`, () => {
    expect(ActionCreator.incrementErrorsCount()).toEqual({
      type: ActionType.INCREMENT_ERRORS_COUNT,
      payload: 1,
    });
  });

  it(`Action creator для увеличения шага игры возвращает правильный action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });
});
