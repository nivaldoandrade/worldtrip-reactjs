import { Box, Text, Tooltip, Icon, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface InfoContinentProps {
	quantity: number;
	title: string;
	cities?: string;
}

export function CardContinent({ quantity, title, cities }: InfoContinentProps) {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpenTooltip() {
		setIsOpen(state => !state);
	}

	return (
		<Box textAlign={["left", "center"]}>
			<Text
				fontSize={["xl", "4xl", "5xl"]}
				fontWeight="semibold"
				color="#FFBA08"
			>
				{quantity}
			</Text>
			<Text
				fontSize={["lg", "xl", "2xl"]}
				fontWeight={["normal", "semibold"]}
			>
				{title}
				{cities && (
					<Tooltip
						label={cities}
						bg="dark.info"
						color="light.text" s
						borderRadius="md"
						p={4}
						isOpen={isOpen}
						offset={[-100, 0]}
					>
						<Button size="xs" variant="unstyled" onClick={handleOpenTooltip}>
							<span>
								<Icon
									as={FiAlertCircle}
									w="13px"
									h="13px"
									color="dark.info"
									transform="translateY(-2px)"
								/>
							</span>
						</Button>
					</Tooltip>
				)}
			</Text>
		</Box>
	);
}