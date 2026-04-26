import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./root-navigator";

export const useAppNavigation = () => useNavigation<NativeStackNavigationProp<RootStackParamList>>();
export const useAppRoute = () => useRoute<RouteProp<RootStackParamList>>();