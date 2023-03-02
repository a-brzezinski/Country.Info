import { Spinner, Text, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from './CountryCard/CountryCard';

const CountryInfo = () => {
	const [countryData, setCountryData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setError] = useState(false);
	const data = useSelector(state => state.country);
	const countryName = data.country;

	useEffect(() => {
		if (countryName === '') return;

		const fetchCountryData = async () => {
			const response = await fetch(
				`https://restcountries.com/v2/name/${countryName}`
			);

			if (!response.ok) {
				setError(true);
				return;
			}

			setIsLoading(true);
			const fetchedData = await response.json();

			setCountryData(fetchedData);
			setIsLoading(false);

			setError(false);
		};

		fetchCountryData();
	}, [data]);

	const roundedPopulation = (countryData[0]?.population / 1000000).toFixed(2);

	return (
		<Box>
			{isLoading && (
				<Spinner
					display='flex'
					justifyContent='center'
					alignContent='center'
					color='green.300'
					size='xl'
				/>
			)}
			{isError && (
				<Text fontWeight='bold' color='tomato' textAlign='center'>
					The country with this name does not exist
				</Text>
			)}

			{countryName === '' || isError ? (
				<Text color='#2a9d8f' fontSize='1.5rem' textAlign='center'>
					Enter the name of the country to find out the details.
				</Text>
			) : (
				<CountryCard
					imgSrc={countryData[0]?.flag}
					countryName={countryData[0]?.name}
					region={countryData[0]?.region}
					capital={countryData[0]?.capital}
					nativeName={countryData[0]?.nativeName}
					currency={countryData[0]?.currencies[0].code}
					population={roundedPopulation}
				/>
			)}
		</Box>
	);
};

export default CountryInfo;
