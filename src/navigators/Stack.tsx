import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainHeader } from "../components";
import Main from "../screens/Main";
import { Navbar, Notification, Profile, Stream, Users } from "../screens";

const Stck = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <MainHeader>
        <Stck.Navigator>
          <Stck.Screen
            name="Main"
            options={{ headerShown: false }}
            component={Main}
          />
          <Stck.Screen
            name="Users"
            options={{ headerShown: false }}
            component={Users}
          />
          <Stck.Screen
            name="Stream"
            options={{ headerShown: false }}
            component={Stream}
          />
          <Stck.Screen
            name="Profile"
            options={{ headerShown: false }}
            component={Profile}
          />
          <Stck.Screen
            name="Notification"
            options={{ headerShown: false }}
            component={Notification}
          />
          <Stck.Screen
            name="Navbar"
            options={{ headerShown: false }}
            component={Navbar}
          />
        </Stck.Navigator>
      </MainHeader>
      {/* <Stck.Navigator>
        <Stck.Screen
          name="Main"
          options={{ headerShown: false }}
          component={MainHeader}
        />
      </Stck.Navigator> */}
    </NavigationContainer>
  );
};

export default Stack;
