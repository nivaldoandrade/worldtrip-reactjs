import { Flex, Heading, SimpleGrid, Box, Image, Text } from '@chakra-ui/react';

interface CitiesProps {
	citiesContent: {
		city: {
			name: string;
			image: {
				url: string;
				alt?: string
			}
		}
		country: {
			name: string;
			image: {
				url: string;
				alt?: string;
			}
		}
	}[]
}

export function Cities({ citiesContent }: CitiesProps) {
	return (
		<Flex
			flexDirection="column"
			my={9}
		>
			<Heading
				fontSize={["2xl", "3xl", "4xl"]}
				fontWeight="medium"
				mb={10}
			>
				Cidades +100
			</Heading>
			<SimpleGrid
				columns={[1, 2, 3, 3, 4]}
				spacing={11}
				justifyItems={["center", "flex-start"]}
			>
				{citiesContent.map(city => (
					<Box
						key={city.city.name}
						width={["256px",
							"inherit"]}
						borderRadius="lg"
						borderWidth="1px"
						borderColor="rgba(255, 186, 8, 0.5)"
					>
						<Image src={city.city.image.url} alt={city.city.image.alt} w="100%" h="173px" />
						<Flex
							p={6}
							align="center"
							justify="space-between"
							bg="light.white"
						>
							<Box >
								<Text
									fontSize="xl"
									fontWeight="semibold"
								>
									{city.city.name}
								</Text>
								<Text
									fontSize="md"
									fontWeight="medium"
									color="#999999"
								>
									{city.country.name}
								</Text>
							</Box>
							<Image
								src={city.country.image.url}
								alt={city.country.image.alt}
								boxSize="30px"
								borderRadius="full"
							/>
						</Flex>
					</Box>
				))}
			</SimpleGrid>
		</Flex>
	);
}