import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Navbar from '../components/Navbar'
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Review from '../components/Review';
import { Grid, List, ListItem, ListItemText, Divider } from '@mui/material';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

interface ProductType {
    id: string
    title: string
    brand: string
    description: string
    price: number
    thumbnail: string
    images: [string]
}

interface ProductsProps extends ProductType {
	items: ProductType[]
    image: string;
}

function getStepContent(step: number) {
	switch (step) {
		case 0:
			return <AddressForm />;
		case 1:
			return <PaymentForm />;
		case 2:
			return <Review />;
		default:
			throw new Error('Unknown step');
	}
}


export default function Checkout() {

	const [cart, setCart] = React.useState<ProductsProps[]>([])

	React.useEffect(() => {
		let products: ProductsProps[] = []
		const prodData = localStorage.getItem('cart')
		if (prodData) {
			products = JSON.parse(prodData)
			setCart(products)
		} else {
			products = []
			setCart(products)
		}
	}, [])

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	function clearCart() {
		localStorage.removeItem('cart')
		setCart([])
	}

	return (
		<React.Fragment>
			<Navbar />
			<Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
				<Grid container direction={{xs:'column-reverse', md:'row'}} spacing={9} my={{ xs: 0 }} >
					<Grid item xs={12} md={5} paddingInline={1}>
						<Typography variant="h6" gutterBottom>
							Order summary
						<Divider sx={{my:2}}/>
						</Typography>
						<List disablePadding>
							{cart.map((product) => (
								<ListItem key={product.title} sx={{ py: 1, px: 0 }}>
									<ListItemText primary={product.title} />
									<Typography variant="body2">${product.price}</Typography>
								</ListItem>
							))}
							<Divider sx={{my:2}}/>
							<ListItem sx={{ py: 1, px: 0 }}>
								<ListItemText primary="Total" />
								<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
									${cart.map((product: ProductsProps) => product.price).reduce((a: number, b: number) => a + b, 0)}
								</Typography>
							</ListItem>
						</List>
						<Divider sx={{my:2}}/>
						<Box display={'flex'}>
							<Button variant='contained' color='secondary' sx={{marginInlineStart:'auto'}} onClick={clearCart}>Clear</Button>
						</Box>
					</Grid>
					<Grid item xs={12} md={7} order={0}>
						<Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
							<Typography component="h1" variant="h4" align="center">
								Checkout
							</Typography>
							<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
								{steps.map((label) => (
									<Step key={label}>
										<StepLabel>{label}</StepLabel>
									</Step>
								))}
							</Stepper>
							{activeStep === steps.length ? (
								<React.Fragment>
									<Typography variant="h5" gutterBottom>
										Thank you for your order.
									</Typography>
									<Typography variant="subtitle1">
										Your order number is #2001539. We have emailed your order
										confirmation, and will send you an update when your order has
										shipped.
									</Typography>
								</React.Fragment>
							) : (
								<React.Fragment>
									{getStepContent(activeStep)}
									<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
										{activeStep !== 0 && (
											<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
												Back
											</Button>
										)}
										<Button
											variant="contained"
											onClick={handleNext}
											sx={{ mt: 3, ml: 1 }}
										>
											{activeStep === steps.length - 1 ? 'Place order' : 'Next'}
										</Button>
									</Box>
								</React.Fragment>
							)}
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}