import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigation/root-navigator';
import store from './store/store';

export default function App() {
    return (
        <GluestackUIProvider mode="light">
            <Provider store={store}>
                <NavigationContainer theme={DefaultTheme}>
                    <RootNavigator />
                    <StatusBar style="auto" />
                </NavigationContainer>
            </Provider>
        </GluestackUIProvider>
    );
}