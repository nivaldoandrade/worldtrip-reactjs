import { Flex, Heading, Box, Text, Image, HStack } from '@chakra-ui/react';

export function Banner() {
	return (
		<Flex
			w="100%"
			h={{ base: '163', md: '335' }}
			backgroundImage="url('/banner.png')"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			backgroundPosition="center"
			px={['3', '6']}
		>
			<Flex
				maxWidth={1440}
				mx="auto"
				w="100%"
				align="center"
				justifyContent={{ base: 'center', md: 'space-between' }}
				px={{ base: '0', md: '20px', xl: '140px' }}
			>
				<Box
					mr={{ base: '0', md: '57px' }}
				>
					<Heading
						fontSize={{ base: 'md', sm: "2xl", lg: '4xl' }}
						lineHeight={{ lg: 'base', xl: '54px' }}
						color="light.text"
					>
						5 Continentes, <br />infinitas possibilidades.
					</Heading>
					<Text
						fontSize={{ base: 'xs', md: 'xl' }}
						lineHeight={{ base: 'base', md: '30px' }}
						color="light.info"
						mt={["3", "5"]}
					>
						Chegou a hora de tirar do papel a viagem que você sempre sonhou.
					</Text>
				</Box>
				<Image
					src="/airplane.png"
					alt="avião"
					transform="translateY(55px)"
					boxSize={{ base: '300px', lg: 'initial' }}
					display={{ base: 'none', md: 'block' }}
				/>
			</Flex>
		</Flex>
	);
}