import { Flex, Text, HStack } from '@chakra-ui/react';
import { CardContinent } from './Card';

interface InfoContentContinentProps {
	content: string;
	cards: {
		countries: number;
		languages: number;
		cities: number;
	}
	cities: string;
}

export function InfoContentContinent({ content, cards, cities }: InfoContentContinentProps) {
	return (
		<Flex
			flex="1"
			my={{ base: 6, md: 20 }}
			flexDirection={{ base: "column", xl: "row" }}
			align="center"
			justifyContent="space-between"
		>
			<Text
				w="100%"
				maxWidth={{ base: "inherit", xl: "600px" }}
				fontSize={["md", "xl", "2xl"]}
				lineHeight={["6", "9"]}
				textAlign="justify"
				mb={{ base: 4, xl: "0" }}
			>
				{content}
			</Text>

			<Flex w={["100%", "inherit"]} >
				<HStack spacing={[3, 10]} flex="1" justifyContent="space-between">
					<CardContinent quantity={cards.countries} title="países" />
					<CardContinent quantity={cards.languages} title="línguas" />
					<CardContinent quantity={cards.cities} title="cidades +100" cities={cities} />
				</HStack>
			</Flex>
		</Flex>
	);
}