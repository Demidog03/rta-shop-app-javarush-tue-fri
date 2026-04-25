import AccountScreen from "@/screens/account/account-screen";
import CartScreen from "@/screens/cart/cart-screen";
import CategoriesScreen from "@/screens/categories/categories-screen";
import HomeScreen from "@/screens/home/home-screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootTabParamList = {
    Home: undefined;
    Categories: undefined;
    Cart: undefined;
    Account: undefined;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    switch (route.name) {
                        case 'Home':
                            return <Ionicons name="home" color={color} size={size} />;
                        case 'Categories':
                            return <Ionicons name="albums" color={color} size={size} />;
                        case 'Cart':
                            return <Ionicons name="cart" color={color} size={size} />;
                        case 'Account':
                            return <Ionicons name="person" color={color} size={size} />;
                    }
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Categories" component={CategoriesScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}