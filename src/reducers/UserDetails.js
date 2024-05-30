/* eslint-disable default-case */
export default function UserDetails(state = null, action) {
    console.log('reducer active book');
    switch (action.type) {
      case "SELECTED_USER":
        return action.payload;
    }
  
    return state;
  }