import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { addToCart, removeFromCart } from "@/modules/products/slices/products.slice";
import { useAppNavigation, useAppRoute } from "@/navigation/hooks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Header from "@/widjets/header/Header";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert, Platform, StyleSheet, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetailsScreen() {
    const navigation = useAppNavigation();
    const dispatch = useAppDispatch();
    const { id } = useAppRoute().params as { id: string };
    const { cart, products } = useAppSelector((state) => state.products);
    const product = products.find((product) => product.id === id);
    

    function handleAddToCart() {
        if (product) {
            dispatch(addToCart(product));
            if (Platform.OS === 'android') {
                ToastAndroid.showWithGravity(`"${product.name}" added to cart`, ToastAndroid.SHORT, ToastAndroid.TOP);
            }
            else if (Platform.OS === 'ios') {
                Alert.alert('Added to cart', `"${product.name}" added to cart`);
            }
        }
    }

    function handleRemoveFromCart() {
        if (product) {
            dispatch(removeFromCart(product));
        }
    }

    function checkIfProductIsInCart() {
        return cart.find((product) => product.id === id);
    }

    console.log(cart)
    console.log(products)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box style={styles.container}>
                <Box>
                    <Header title={'Product Details'} onBackPress={() => navigation.navigate('Tabs')} onSharePress={() => {}} />
                    <Image source={product?.image} alt="Product Image" size="full" resizeMode="cover" style={styles.image} />
                    <Box style={styles.productContainer}>
                        <Heading style={styles.productName} size="2xl">{product?.name}</Heading>
                        <Heading style={styles.productPrice} size="2xl">${product?.price}</Heading>

                        <Box style={styles.productRatingContainer}>
                            <Box style={styles.productRatingStarContainer}>
                                <Ionicons name="star" size={24} color="orange" />
                                <Heading size="lg">{product?.rating.stars}/5</Heading>
                                <Text style={styles.productRatingReviews}>({product?.rating.reviews})</Text>
                            </Box>
                            <Box style={styles.productDeliveryTypeContainer}>
                                <Feather name="truck" size={24} color="black" />
                                {product?.deliveryType === 'free' && <Text>Free Delivery</Text>}
                                {product?.deliveryType === 'paid' && <Text>Paid Delivery</Text>}
                            </Box>
                        </Box>

                        <Divider style={styles.productDescriptionDivider} />

                        <Text>{product?.description}</Text>
                    </Box>
                </Box>

                {checkIfProductIsInCart() && (
                    <Button onPress={handleRemoveFromCart} style={styles.addToCartButton} size="lg" variant="solid" action="negative">
                        <ButtonText style={styles.addToCartButtonText}>Remove from cart</ButtonText>
                    </Button>
                )}
                {!checkIfProductIsInCart() && (
                    <Button onPress={handleAddToCart} style={styles.addToCartButton} size="lg" variant="solid">
                        <ButtonText style={styles.addToCartButtonText}>Add to Cart</ButtonText>
                    </Button>
                )}
            </Box>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    image: {
        height: 276,
    },
    productContainer: {
        padding: 16
    },
    productName: {
        marginBottom: 8,
    },
    productPrice: {
        marginBottom: 27,
        color: 'rgba(52, 131, 82, 1)'
    },
    productRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        justifyContent: 'space-between',
    },
    productRatingStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    productRatingReviews: {
        fontSize: 16,
    },
    productDeliveryTypeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    productDescriptionDivider: {
        marginVertical: 16,
    },
    addToCartButton: {
        height: 48
    },
    addToCartButtonText: {
        fontSize: 18,
    }
});