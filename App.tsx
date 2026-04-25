import 'react-native-gesture-handler';

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TabsNavigator } from './navigation/root-navigator';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

export default function App() {
    return (
        <GluestackUIProvider mode="light">
            <NavigationContainer theme={DefaultTheme}>
                <TabsNavigator />
                <StatusBar style="auto" />
            </NavigationContainer>
        </GluestackUIProvider>
    );
}