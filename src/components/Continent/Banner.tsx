import { Flex, Text } from '@chakra-ui/react';


interface BannerProps {
	banner: {
		url: string;
		alt?: string;
	}
	name: string;
}


export function BannerContinent({ banner, name }: BannerProps) {
	return (
		<Flex
			background={`linear-gradient(
				0deg, rgba(28, 20, 1, 0.35), 
			rgba(28, 20, 1, 0.35)
			), url(${banner.url})`}
			backgroundSize="cover"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			w="100%"
			h={[150, 300, 300, 500]}
			title={banner.alt}
		>
			<Flex
				w="100%"
				mx="auto"
				px={{ base: "0", md: "32px", lg: "140px" }}
				maxWidth={1440}
				align={["center", "center", "flex-end"]}
				justify={["center", "center", "initial"]}
				pb={[0, 0, 59]}
			>
				<Text
					fontSize={["3xl", "5xl"]}
					fontWeight="semibold"
					color="light.text"

				>
					{name}
				</Text>
			</Flex>
		</Flex>
	);
}