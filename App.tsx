import React from "react";
import { Provider } from "react-redux";
import { LogBox, StatusBar } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import { COLORS } from "./src/common";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import Toast from 'react-native-toast-message';

const App = () => {
  LogBox.ignoreAllLogs(true);

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
          <NavigationContainer>
            <StackNavigator />
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      
  );
};

export default App;

