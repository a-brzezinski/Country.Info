import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const CountryCard = props => {
	const gridItemStyles = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '12px',
		padding: '1em',
		width: '250px',
		height: '250px',
	};

	const headingStyles = {
		as: 'h2',
		fontSize: '2.2rem',
		color: 'white',
	};

	const textStyles = {
		marginTop: '1em',
		fontSize: '1.5rem',
		color: '#077187',
	};

	return (
		<Grid
			gridTemplateColumns={{
				base: 'repeat(1, 1fr)',
				md: 'repeat(3,1fr)',
				xl: 'repeat(3,1fr)',
			}}
			borderRadius='12px'
			justifyItems='center'
			boxShadow='xl'
			marginTop='2em'
			gap={5}
			p='1em'>
			<GridItem>
				<Image
					src={props.imgSrc}
					objectFit='cover'
					boxSize='250px'
					borderRadius='full'
					border='1px solid'       
					borderColor='gray'
				/>
			</GridItem>
			<GridItem bg='#99e2b4' style={gridItemStyles}>
				<Heading style={headingStyles}>{props.countryName}</Heading>
				<Text style={textStyles}>Country in {props.region}</Text>
			</GridItem>
			<GridItem bg='#88d4ab' style={gridItemStyles}>
				<Heading style={headingStyles}>Capital</Heading>
				<Text style={textStyles}>{props.capital}</Text>
			</GridItem>
			<GridItem bg='#78c6a3' style={gridItemStyles}>
				<Heading style={headingStyles}>Native Name</Heading>
				<Text style={textStyles}>{props.nativeName}</Text>
			</GridItem>
			<GridItem bg='#67b99a' style={gridItemStyles}>
				<Heading style={headingStyles}>Currency</Heading>
				<Text style={textStyles}>{props.currency}</Text>
			</GridItem>
			<GridItem bg='#56ab91' style={gridItemStyles}>
				<Heading style={headingStyles}>Population</Heading>
				<Text style={textStyles}>{props.population} MLN</Text>
			</GridItem>
		</Grid>
	);
};

export default CountryCard;
