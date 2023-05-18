import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "../screens";

const Stck = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <Stck.Navigator>
        <Stck.Screen
          name="Main"
          options={{ headerShown: false }}
          component={Main}
        />
      </Stck.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
