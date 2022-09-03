import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/stackNavigation";
import { navigationRef } from "./src/navigation/navigationHelper";
import { configureAppStore } from "./src/utils/provider/store/configureStore";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

enableScreens();

const store = configureAppStore();
export default function App() {
  const routeNameRef = React.useRef<string>();

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName =
            navigationRef.current?.getCurrentRoute()?.name;
            routeNameRef.current = currentRouteName;
        }}
      >
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
