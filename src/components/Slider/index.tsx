import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import Link from 'next/link';

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface Continent {
	uid: string;
	name: string;
	description: string;
	banner: {
		url: string;
		alt?: string;
	}
}

interface SliderProps {
	continents: Continent[];
}

export function Slider({ continents }: SliderProps) {
	return (
		<Flex maxWidth={1440} w="100%" mx="auto" px={{ base: '0', md: '20px', xl: '140px' }}>
			<Swiper
				centeredSlides={true}
				autoplay={{
					"delay": 2500,
					"disableOnInteraction": false
				}}
				pagination={{
					"clickable": true
				}}
				navigation={true}
			>
				{continents.map(continent => (
					<SwiperSlide key={continent.uid}>
						<Link href={`/continente/${continent.uid}`}>
							<a>
								<Flex
									background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), 
								rgba(28, 20, 1, 0.35)), url(${continent.banner.url})`}
									backgroundSize="cover"
									backgroundRepeat="no-repeat"
									backgroundPosition="center"
									w="100%"
									height={["250px", "450px"]}
									flexDir="column"
									align="center"
									justify="center"
									title={continent.banner.alt}
								>
									<Heading
										fontSize={["2xl", "3xl", "5xl"]}
										fontWeight="700"
										color="light.text"
										mb={["2", "4"]}
									>
										{continent.name}
									</Heading>
									<Text
										fontSize={["sm", "xl", "2xl"]}
										fontWeight="700"
										color="light.info"
									>
										{continent.description}
									</Text>
								</Flex>
							</a>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
}