import homePageMainImage from '@/assets/images/home-page-main-image.jpg';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Grid, GridItem } from '@/components/ui/grid';
import { Heading } from '@/components/ui/heading';
import { Image } from "@/components/ui/image";
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useAppNavigation } from '@/navigation/hooks';
import { useAppSelector } from '@/store/hooks';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    const navigation = useAppNavigation()
    const { products } = useAppSelector((state) => state.products);

    return (
        <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white' }}>
            <Image
                source={homePageMainImage}
                alt="Home Page Main Image"
                size="full"
                resizeMode="cover"
                style={{ height: 187 }}
            />
            <VStack style={styles.container} space="md" reversed={false}>
                <Box style={styles.headingContainer}>
                    <Heading>Exclusive Offer</Heading>
                    <Ionicons name="options" size={24} color="black" />
                </Box>
                <ScrollView
                    style={styles.cardsContainer}
                >
                    <Grid className="gap-4" _extra={{ className: 'grid-cols-12' }}>
                        {products.map((product) => (
                            <GridItem key={product.id} _extra={{ className: 'col-span-6' }}>
                                <TouchableOpacity
                                    style={{ flex: 1 }}
                                    onPress={() =>
                                        navigation.navigate('ProductDetails', { id: product.id })
                                    }
                                >
                                    <Card style={styles.card}>
                                        <Image
                                            source={product.image}
                                            style={styles.cardImage}
                                            size="full"
                                            alt="image"
                                        />
                                        <Box style={styles.cardBody}>
                                            <Box>
                                                <Heading size="md" className="mb-2">
                                                    {product.name}
                                                </Heading>
                                                <Text style={styles.cardDescription} className="text-sm font-normal mb-4 text-typography-700">
                                                    {product.description}
                                                </Text>
                                            </Box>
                                            <Heading style={styles.cardPrice} size="xl">
                                                ${product.price}
                                            </Heading>
                                        </Box>
                                    </Card>
                                </TouchableOpacity>
                            </GridItem>
                        ))}
                    </Grid>
                </ScrollView>
            </VStack>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardsContainer: {
        flex: 1,
    },
    card: {
        padding: 0,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(221, 220, 219, 1)',
        flex: 1,
    },
    cardImage: {
        height: 105,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardDescription: {

    },
    cardBody: {
        padding: 12,
        paddingBottom: 14,
        paddingLeft: 8,
        paddingRight: 8,
        flex: 1,
        justifyContent: 'space-between',
    },
    cardPrice: {

    },
});