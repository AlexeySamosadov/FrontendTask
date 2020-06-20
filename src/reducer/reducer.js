const initialState = {
  activeWindow: `1`,
  activeWidgetOne: true,
  activeWidgetTwo: true,
  activeWidgetThree: false,
  activeWidgetFour: false,
};

const ActionTypes = {
  CHANGE_WINDOW: `CHANGE_WINDOW`,
  WIDGET_ONE: `WIDGET_ONE`,
  WIDGET_TWO: `WIDGET_TWO`,
  WIDGET_THREE: `WIDGET_THREE`,
  WIDGET_FOUR: `WIDGET_FOUR`,
};

const ActionCreators = {
  changeWindow: (status) => ({
    type: ActionTypes.CHANGE_WINDOW,
    payload: status,
  }),
  changeWidgetOne: () => ({
    type: ActionTypes.WIDGET_ONE,
  }),
  changeWidgetThree: () => ({
    type: ActionTypes.WIDGET_THREE,
  }),
  changeWidgetTwo: () => ({
    type: ActionTypes.WIDGET_TWO,
  }),
  changeWidgetFour: () => ({
    type: ActionTypes.WIDGET_FOUR,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_WINDOW:
      return {...state, activeWindow: action.payload};
    case ActionTypes.WIDGET_ONE:
      return {...state, activeWidgetOne: !state.activeWidgetOne};
    case ActionTypes.WIDGET_THREE:
      return {...state, activeWidgetThree: !state.activeWidgetThree};
    case ActionTypes.WIDGET_TWO:
      return {...state, activeWidgetTwo: !state.activeWidgetTwo};
    case ActionTypes.WIDGET_FOUR:
      return {...state, activeWidgetFour: !state.activeWidgetFour};
  }
  return state;
};


export {reducer, ActionCreators, ActionTypes};
