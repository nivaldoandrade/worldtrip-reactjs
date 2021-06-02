import { Flex } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import { BannerContinent } from '../../components/Continent/Banner';
import { Cities } from '../../components/Continent/Cities';
import { InfoContentContinent } from '../../components/Continent/InfoContent';

import { Header } from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';

interface ContinentProps {
	continent: {
		name: string;
		content: string;
		banner: {
			url: string;
			alt?: string;
		}
		cards: {
			countries: number;
			languages: number;
			cities: number
		}
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
}

export default function Continent({ continent }: ContinentProps) {
	const [cities, setCities] = useState('');

	useEffect(() => {
		const citiesFormatted = continent.citiesContent.map(
			city => city.city.name)
			.slice(0, 5)
			.join(', ')
		setCities(citiesFormatted);
	}, [continent])

	return (
		<Flex flexDirection="column" w="100%">
			<Head>
				<title>Worldtrip - {continent.name}</title>
			</Head>
			<Header />
			<BannerContinent
				banner={continent.banner}
				name={continent.name}
			/>
			<Flex
				w="100%"
				flexDirection="column"
				maxWidth={1440}
				mx="auto"
				px={{ base: "16px", md: "32px", lg: "140px" }}
			>
				<InfoContentContinent content={continent.content} cards={continent.cards} cities={cities} />
				<Cities citiesContent={continent.citiesContent} />
			</Flex>
		</Flex>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const prismic = getPrismicClient();
	const { continent } = ctx.params;

	const response = await prismic.getByUID('continent', String(continent), {});

	const responseContinent = {
		uid: response.uid,
		name: response.data.name,
		banner: {
			url: response.data.continentpagebanner.url,
			alt: response.data.continentpagebanner.alt,
		},
		cards: {
			countries: response.data.countries,
			languages: response.data.languages,
			cities: response.data.cities,
		},
		content: response.data.content,
		citiesContent: response.data?.citiescontent.map(city => ({
			city: {
				name: city.cityname,
				image: {
					url: city.cityimage.url,
					alt: city.cityimage.alt,
				}
			},
			country: {

				name: city.countryname,
				image: {
					url: city.countryimage.url,
					alt: city.countryimage.alt,
				}
			}
		}))
	};

	return {
		props: { continent: responseContinent },
		revalidate: 60 * 60 * 24 // 24 hours
	}
}