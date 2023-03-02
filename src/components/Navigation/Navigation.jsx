import { Box, Heading } from '@chakra-ui/react';
import SearchBar from './SearchBar/SearchBar';

const Navigation = () => {
	return (
		<Box>
			<Heading as='h1' textAlign='center' color='green.300' p='1em'>
				Country Info
			</Heading>
			<SearchBar />
		</Box>
	);
};

export default Navigation;
