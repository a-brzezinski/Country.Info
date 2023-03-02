// Chakra Imports

import {
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	FormErrorMessage,
	FormControl,
	Box,
} from '@chakra-ui/react';

import { Search2Icon } from '@chakra-ui/icons';

// Tools
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { countryActions } from '../../../store/country-slice';

const SearchBar = () => {
	const [country, setCountry] = useState('');
	const [isError, setIsError] = useState(false);
	const dispatch = useDispatch();

	const inputChangeHandler = e => {
		setCountry(e.target.value);
	};

	const submitFormHandler = e => {
		e.preventDefault();

		if (country.trim() === '') {
			isError === 'true';
			setIsError(true);
			return;
		}

		setIsError(false);

		dispatch(countryActions.getCountryName(country.toLowerCase()));

		setCountry('');
	};

	return (
		<form onSubmit={submitFormHandler}>
			<FormControl isInvalid={isError} display='flex' gap={3} p='1em'>
				<Box w='100%'>
					<InputGroup display='flex' flexDirection='column'>
						<InputLeftElement children={<Search2Icon />} />
						<Input
							placeholder='Enter Country Name'
							value={country}
							onChange={inputChangeHandler}
						/>
					</InputGroup>
					{isError && (
						<FormErrorMessage>Country Name is required.</FormErrorMessage>
					)}
				</Box>
				<Button type='submit' colorScheme='teal'>
					Search
				</Button>
			</FormControl>
		</form>
	);
};

export default SearchBar;
