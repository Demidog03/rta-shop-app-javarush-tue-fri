import AccountScreen from "@/screens/account/account-screen";
import CartScreen from "@/screens/cart/cart-screen";
import CategoriesScreen from "@/screens/categories/categories-screen";
import HomeScreen from "@/screens/home/home-screen";
import ProductDetailsScreen from "@/screens/product-details/product-details-screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootTabParamList = {
    Home: undefined;
    Categories: undefined;
    Cart: undefined;
    Account: undefined;
}

export type RootStackParamList = {
    ProductDetails: { id: string };
    Tabs: undefined;
}

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen options={{ headerShown: false }} name="Tabs" component={TabsNavigator} />
            <Stack.Screen options={{ headerShown: false }} name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}

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
