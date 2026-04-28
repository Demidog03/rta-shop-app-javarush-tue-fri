import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { useAppNavigation } from "@/navigation/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity } from "react-native";

interface HeaderProps {
    title: string;
    onBackPress?: () => void;
    onSharePress?: () => void;
}

export default function Header({ title, onBackPress, onSharePress }: HeaderProps) {
    const navigation = useAppNavigation();

    return (
        <Box style={styles.headingContainer}>
            <TouchableOpacity onPress={onBackPress}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <Heading>{title}</Heading>
            <TouchableOpacity onPress={onSharePress}>
                <Ionicons name="share-social-outline" size={24} color="black" />
            </TouchableOpacity>
        </Box>
    )
}

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10.5,
        paddingHorizontal: 16,
    },
})