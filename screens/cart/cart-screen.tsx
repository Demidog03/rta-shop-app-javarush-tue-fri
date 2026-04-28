import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { useAppNavigation } from "@/navigation/hooks";
import { useAppSelector } from "@/store/hooks";
import Header from "@/widjets/header/Header";
import { Fragment } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
    const navigation = useAppNavigation();

    const { cart } = useAppSelector((state) => state.products);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Your bag" onBackPress={() => navigation.navigate('Tabs')} onSharePress={() => { }} />

            <Box style={styles.container}>
                {cart.length <= 0 && (
                    <Box style={styles.emptyCart}>
                        <Heading>Your cart is empty</Heading>
                    </Box>
                )}

                {cart.map((product) => (
                    <Fragment key={product.id}>
                        <Box style={styles.productInfo}>
                            <Image source={product.image} alt="Product Image" resizeMode="cover" style={styles.image} />
                            <Box style={styles.productInfoContent}>
                                <Heading>{product.name}</Heading>
                                <Box style={styles.productInfoPrice}>
                                    <Button size="sm" variant="outline">
                                        <ButtonText>Remove</ButtonText>
                                    </Button>
                                    <Heading>${product.price}</Heading>
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                    </Fragment>
                ))}

            </Box>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 96,
        height: 96,
    },
    container: {
        flex: 1,
        padding: 16,
        gap: 16,
    },
    productInfo: {
        flexDirection: 'row',
        gap: 24,
    },
    productInfoContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    productInfoPrice: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})