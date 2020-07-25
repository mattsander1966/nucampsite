import { createStore, combineReducers, applyMiddleware } from "redux";
import { Campsites } from "./campsites";
import { Comments } from "./comments";
import { Partners } from "./partners";
import { Promotions } from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./Forms";
import { createForms } from "react-redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
      ...createForms({
        feedbackForm: InitialFeedback,
      }),
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
    // applyMiddleware(thunk, logger)
  );

  return store;
};
