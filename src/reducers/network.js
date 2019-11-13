export const network = (state = {connected: true}, action) => {
  switch (action.type) {
    case 'NETWORK_STATUS_CHANGE':
      return {connected: action.connected};
    default:
      return state;
  }
};
