import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
});

export default store;

/**
 * configure store, wants an configuration object, where we set up our route reducer.
 * Now that can be a single reducer function or a map of reducers (keys can be anything).
 *  uiSlice.reducer  =>  Reducer created by uiSlice.
 */


/**
 * with the store exported, we need to provide us to the application for it to have an effect.
 * index.js => There, we can import provider, the provider component from React Redux and wrap that around app.
 * That's how we provide our Redux store to the entire application,
 */