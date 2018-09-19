const initialState = {
  cities: [],
  shows: [],
  loading: true,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CITIES':
      return {
        ...state,
        cities: action.cities,
        loading: false,
      };
    case 'LOAD_SHOWS':
      return {
        ...state,
        shows: action.shows,
        loading: false,
      };
    default:
      return state;
  }
};
