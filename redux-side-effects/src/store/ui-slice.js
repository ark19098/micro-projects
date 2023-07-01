import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;

/**
 * Pass options object to createSlice();
 * 
 * Then we need the reducers key,
 * which is a map of all the reducers or to be precise
 * it's a map of methods that represent
 * all the different cases, the different actions
 * we wanna handle with that reducer.
 * Methods in the reducers key, receives old state.   
 * reducers: { 
 *      toggle(state) {
 *          state.cartIsVisible = !state.cartIsVisible;
 *      } 
 * }
 * 
 * A mapping from action types to action-type-specific case reducer functions.
 * For every action type, a matching action creator will be generated using createAction().
 * 
 * Note: A core reducer function have multiple if action checks (different actions).
 */