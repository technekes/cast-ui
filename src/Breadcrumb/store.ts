import * as React from 'react';

export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_CRUMB':
      return [...state, action.payload];
    case 'UPDATE_CRUMB':
      return state.map(({ ...crumb }) => {
        return crumb.id === action.payload.id ? action.payload : crumb;
      });
    case 'REMOVE_CRUMB':
      return state.filter(({ ...crumb }) => {
        return crumb.id !== action.payload.id;
      });
    default:
      return state;
  }
}

export function useCrumbsStore() {
  const [state, dispatch] = React.useReducer(reducer, []);
  let [crumbs, setCrumbs] = React.useState(state);

  if (state.length && JSON.stringify(state) !== JSON.stringify(crumbs)) {
    setCrumbs(state);
  }

  React.useEffect(() => {
    console.log(' I see here', crumbs, state);
    setCrumbs(state);
  }, [crumbs, setCrumbs]);

  return { crumbs, dispatch };
}

export default useCrumbsStore;
