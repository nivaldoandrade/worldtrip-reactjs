import { useState, useEffect } from 'react';
import { Flex, Image, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi';


export function Header() {
	const [isBackButton, setIsBackButton] = useState(false);
	const { asPath } = useRouter();

	useEffect(() => {
		(asPath !== '/')
			? setIsBackButton(true)
			: setIsBackButton(false)
	}, [asPath]);

	return (
		<Flex
			as="header"
			w="100%"
			h={["50", "100"]}
			bg="light.text"
		>
			<Flex
				w="100%"
				mx="auto"
				px={{ base: "16px", lg: "140px" }}
				maxWidth={1440}
				align="center"
				justify="center"
			>
				{isBackButton && (
					<Link href="/">
						<a>
							<Icon as={FiChevronLeft} w={[4, 8]} h={[8, 16]} />
						</a>
					</Link>
				)}
				<Flex w="100%" justify="center" py={6}>
					<Link href="/">
						<a>
							<Image
								src="/logo.svg"
								alt="worldstrip"
								width={["81px",
									"initial"]}
								height={["20px",
									"initial"]}
							/>
						</a>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
}