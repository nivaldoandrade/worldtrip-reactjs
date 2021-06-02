import { Flex, Grid, GridItem } from '@chakra-ui/react';

import { Type } from './Type';

export function TravelsTypes() {
	return (
		<Flex
			maxWidth={1160}
			mx="auto"
			my={["9", "20"]}
			px="6"
		>
			<Grid
				templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 3fr)", xl: "repeat(5, 1fr)" }}
				gap={16}
			>
				<GridItem>
					<Type icon="cocktail">vida noturna</Type>
				</GridItem>
				<GridItem >
					<Type icon="surf">praia</Type></GridItem>
				<GridItem >
					<Type icon="building">moderno</Type>
				</GridItem>
				<GridItem>
					<Type icon="museum">clássico</Type></GridItem>
				<GridItem colSpan={[2, 2, "auto"]} justifySelf={["center", "center", "initial"]}>
					<Type icon="earth">e mais...</Type>
				</GridItem>
			</Grid>
		</Flex>
	);
}