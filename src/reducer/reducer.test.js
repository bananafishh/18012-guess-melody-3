import {reducer, ActionType} from './reducer';

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
