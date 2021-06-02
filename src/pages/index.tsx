import { Flex, Divider, Center, Text, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';

import { getPrismicClient } from '../services/prismic';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TravelsTypes } from '../components/TravelTypes';


interface Continent {
	uid: string;
	name: string;
	description: string;
	banner: {
		url: string;
		alt?: string;
	}
}

interface HomeProps {
	continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
	return (

		<Flex flexDirection="column" w="100%">
			<Head>
				<title>Worldtrip - Home</title>
			</Head>
			<Header />
			<Banner />
			<TravelsTypes />
			<Box>
				<Center width={["60px", "90px"]} mx="auto" >
					<Divider borderColor="dark.text" borderWidth={["1px", "1px", "2px"]} />
				</Center>
				<Text
					fontSize={["xl", "3xl", "4xl"]}
					fontWeight="500"
					lineHeight={["30px", "54px"]}
					textAlign="center"
					my={["36px", "52px"]}
				>
					Vamos nessa ?<br /> Então escolha seu continente
				</Text>
			</Box>
			<Slider continents={continents} />
		</Flex>

	)
}

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient();

	const response = await prismic.query(
		Prismic.Predicates.at('document.type', 'continent'),
		{
			fetch: [
				'continent.name',
				'continent.description',
				'continent.bannerslider'
			]
		}
	)

	const continents = response.results.map(continent => ({
		uid: continent.uid,
		name: continent.data.name,
		description: continent.data.description,
		banner: {
			url: continent.data.bannerslider.url,
			alt: continent.data.bannerslider.alt,
		}
	}))


	return {
		props: { continents },
		revalidate: 60 * 60 * 24 // 24 hours
	}
}


