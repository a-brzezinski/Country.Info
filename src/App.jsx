import { Box, Divider } from '@chakra-ui/react';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Navigation from './components/Navigation/Navigation';

const App = () => {
	return (
		<Box maxW='1200px' m='0 auto'>
			<Navigation />
			<Divider />
			<CountryInfo />
		</Box>
	);
};

export default App;
