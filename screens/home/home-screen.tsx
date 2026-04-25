import homePageMainImage from '@/assets/images/home-page-main-image.jpg';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Grid, GridItem } from '@/components/ui/grid';
import { Heading } from '@/components/ui/heading';
import { Image } from "@/components/ui/image";
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
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
                    contentContainerStyle={{ paddingBottom: tabBarHeight + insets.bottom + 32 }}
                >
                    <Grid className="gap-4" _extra={{ className: 'grid-cols-12' }}>
                        <GridItem _extra={{ className: 'col-span-6' }}>
                            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                                <Image
                                    source={homePageMainImage}
                                    style={{ height: 105 }}
                                    size="full"
                                    alt="image"
                                />
                                <Text className="text-sm font-normal mb-2 text-typography-700">
                                    May 11, 2023
                                </Text>
                                <Heading size="md" className="mb-4">
                                    The Power of Positive Thinking
                                </Heading>
                            </Card>
                        </GridItem>
                        <GridItem _extra={{ className: 'col-span-6' }}>
                            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                                <Image
                                    source={homePageMainImage}
                                    style={{ height: 105 }}
                                    size="full"
                                    alt="image"
                                />
                                <Text className="text-sm font-normal mb-2 text-typography-700">
                                    May 11, 2023
                                </Text>
                                <Heading size="md" className="mb-4">
                                    The Power of Positive Thinking
                                </Heading>
                            </Card>
                        </GridItem>
                        <GridItem _extra={{ className: 'col-span-6' }}>
                            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                                <Image
                                    source={homePageMainImage}
                                    style={{ height: 105 }}
                                    size="full"
                                    alt="image"
                                />
                                <Text className="text-sm font-normal mb-2 text-typography-700">
                                    May 11, 2023
                                </Text>
                                <Heading size="md" className="mb-4">
                                    The Power of Positive Thinking
                                </Heading>
                            </Card>
                        </GridItem>
                        <GridItem _extra={{ className: 'col-span-6' }}>
                            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                                <Image
                                    source={homePageMainImage}
                                    style={{ height: 105 }}
                                    size="full"
                                    alt="image"
                                />
                                <Text className="text-sm font-normal mb-2 text-typography-700">
                                    May 11, 2023
                                </Text>
                                <Heading size="md" className="mb-4">
                                    The Power of Positive Thinking
                                </Heading>
                            </Card>
                        </GridItem>
                        <GridItem _extra={{ className: 'col-span-6' }}>
                            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                                <Image
                                    source={homePageMainImage}
                                    style={{ height: 105 }}
                                    size="full"
                                    alt="image"
                                />
                                <Text className="text-sm font-normal mb-2 text-typography-700">
                                    May 11, 2023
                                </Text>
                                <Heading size="md" className="mb-4">
                                    The Power of Positive Thinking
                                </Heading>
                            </Card>
                        </GridItem>
                        <GridItem _extra={{ className: 'col-span-6' }}>
                            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                                <Image
                                    source={homePageMainImage}
                                    style={{ height: 105 }}
                                    size="full"
                                    alt="image"
                                />
                                <Text className="text-sm font-normal mb-2 text-typography-700">
                                    May 11, 2023
                                </Text>
                                <Heading size="md" className="mb-4">
                                    The Power of Positive Thinking
                                </Heading>
                            </Card>
                        </GridItem>
                        <GridItem _extra={{ className: 'col-span-6' }}>
                            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                                <Image
                                    source={homePageMainImage}
                                    style={{ height: 105 }}
                                    size="full"
                                    alt="image"
                                />
                                <Text className="text-sm font-normal mb-2 text-typography-700">
                                    May 11, 2023
                                </Text>
                                <Heading size="md" className="mb-4">
                                    The Power of Positive Thinking
                                </Heading>
                            </Card>
                        </GridItem>
                        <GridItem _extra={{ className: 'col-span-6' }}>
                            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                                <Image
                                    source={homePageMainImage}
                                    style={{ height: 105 }}
                                    size="full"
                                    alt="image"
                                />
                                <Text className="text-sm font-normal mb-2 text-typography-700">
                                    May 11, 2023
                                </Text>
                                <Heading size="md" className="mb-4">
                                    The Power of Positive Thinking
                                </Heading>
                            </Card>
                        </GridItem>
                    </Grid>
                </ScrollView>
            </VStack>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardsContainer: {

    }
});