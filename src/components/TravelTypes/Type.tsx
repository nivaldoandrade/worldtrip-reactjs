import { Flex, Image, Text, Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

interface TypeProps {
	icon: string;
	children: React.ReactNode
}

export function Type({ icon, children }: TypeProps) {
	const variant = useBreakpointValue({ base: true, sm: false });


	if (variant) {
		return (
			<Flex align="center" maxHeight="145px">
				<Box
					w="2"
					h="2"
					borderRadius="full"
					bg="#FFBA08"
					mr="2"
				/>
				<Text
					fontSize={['lg', '2xl']}
					fontWeight={['medium', 'semibold']}
				>
					{children}
				</Text>
			</Flex>
		);
	}

	return (
		<Flex flexDirection="column" align="center" height="145px">
			<Image src={`/${icon}.svg`} alt={icon} boxSize={["70px", "70px", "85px"]} mb="6" />
			<Text
				fontSize={["xl", "xl", "1xl"]}
				fontWeight="bold"
			>
				{children}
			</Text>
		</Flex>
	);
}