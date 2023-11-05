import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter';
import SearchBox from '../components/SearchBox';
import BasicPagination from '../components/Pagination';
import Loading from '../components/Loading';

import axios from 'axios';

type ProductType = {
    id: string
    title: string
    brand: string
    description: string
    price: number
    thumbnail: string
    images: [string]
}

// fake api: https://dummyjson.com

function Products() {

	// state
	const [data, setData] = useState<[]>([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [pages, setPages] = useState(1)
	const [limit, ] = useState(12)
	const [skip, setSkip] = useState(0)

	// fetch data
	useEffect(() => {
		setLoading(true)
		setPages(Math.floor(100 / limit))
		setSkip((page - 1) * limit)
		axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
			.then(response => {
				response.data.products.map((product: ProductType) => {
					return product
				})
				setData(response.data.products)
				setLoading(false)
			})
			.catch(error => {
				console.log(error)
				setLoading(false)
			})
		document.title = `Products - MIDDNIGHT Store`
	}, [limit, page, skip])
	// render
	if (loading) return <Loading />
	return (
		<>
			<Navbar />
			<Container maxWidth="xl">
				<Box>
					<Typography variant="h3" fontSize={{xs:28, sm: 48}} align="center" sx={{ marginBlock: 8 }}>
						PRODUCTS
					</Typography>
				</Box>
				<Box
					display='flex'
					flexDirection={{ xs: 'column', sm: 'row' }}
					justifyContent='end'
					my={{ xs: 3, lg: 4, xl: 5 }}
					gap={2}
					width={'100%'}
				>
					<ProductFilter />
					<SearchBox />
				</Box>
				<Grid
					container
					gap={{ xs: 3, lg: 4, xl: 5 }}
					justifyContent="center"
					alignItems="center"
				>
					{data.map((product: ProductType) => {
						return (
							<ProductCard
								key={product.id}
								id={product.id}
								title={product.title}
								brand={product.brand}
								description={product.description}
								price={product.price}
								image={product.thumbnail}
							/>
						)
					})
					}
				</Grid>
			</Container>
			<Box
				display='flex'
				justifyContent="center"
				alignItems="center"
				marginBlock={5}
			>
				<BasicPagination
					page={page}
					setPage={setPage}
					pages={pages}
				/>
			</Box>
		</>
	)
}

export default Products