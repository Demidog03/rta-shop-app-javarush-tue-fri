import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { productsMockData } from "@/modules/products/data/products-mock.data";
import { useAppNavigation, useAppRoute } from "@/navigation/hooks";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetailsScreen() {
    const navigation = useAppNavigation();
    const { id } = useAppRoute().params as { id: string };
    const product = productsMockData.find((product) => product.id === id);

    console.log(id);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box style={styles.container}>
                <Box>
                    <Box style={styles.headingContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Heading>Product Details</Heading>
                        <TouchableOpacity>
                            <Ionicons name="share-social-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </Box>
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

                <Button style={styles.addToCartButton} size="lg" variant="solid">
                    <ButtonText style={styles.addToCartButtonText}>Add to Cart</ButtonText>
                </Button>
            </Box>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10.5,
        paddingHorizontal: 16,
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