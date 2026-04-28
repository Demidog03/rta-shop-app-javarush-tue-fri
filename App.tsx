import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigator } from './navigation/root-navigator';
import store, { persitor } from './store/store';

export default function App() {
    return (
        <GluestackUIProvider mode="light">
            <Provider store={store}>
                <PersistGate persistor={persitor}>
                    <NavigationContainer theme={DefaultTheme}>
                        <RootNavigator />
                        <StatusBar style="auto" />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </GluestackUIProvider>
    );
}