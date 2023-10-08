import "react-native-gesture-handler";
import FlashMessage from "react-native-flash-message";
import Stacks from "./Stacks";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/index";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stacks />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}
