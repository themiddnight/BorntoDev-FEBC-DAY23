import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Navbar from '../components/Navbar'
import StandardImageList from '../components/ImageList';
import BasicRating from '../components/Rating';
import Loading from '../components/Loading';
import formatNumber from '../utils/numericFormat'

import axios from 'axios';

type CommentType = {
    id: string
    postId: number
    body: string
    user: {
        id: number
        username: string
    }
}

function Product() {

	const location = useLocation()
	const id: string = location.pathname.split('/')[1]

	const [loading, setLoading] = useState(false)
	const [product, setProduct] = useState({
		id: '',
		title: '',
		description: '',
		price: '',
		rating: 0,
		stock: 0,
		brand: '',
		category: '',
		images: [],
	})

	const [comments, setComments] = useState([{
		id: '',
		postId: 0,
		body: '',
		user: {
			id: 0,
			username: '',
		}
	}])

	useEffect(() => {
		setLoading(true)
		axios.get(`https://dummyjson.com/products/${id}`)
			.then(response => {
				response.data.price = formatNumber(response.data.price)
				setProduct(response.data)
				setLoading(false)
			})
			.catch(error => {
				console.log(error)
			})

		setLoading(true)
		axios.get(`https://dummyjson.com/comments?limit=0`)
			.then(response => {
				const commentsData = response.data.comments.filter((comment: CommentType) => comment.postId === Number(id))
				setComments(commentsData)
				setLoading(false)
			})
			.catch(error => {
				console.log(error)
			})
	}, [id])
	
	document.title = `${product.title} - MIDDNIGHT Store`

	if (loading) return <Loading />
	return (
		<>
			<Navbar />
			<Container maxWidth="lg">
				<Grid container spacing={5} padding={{ xs: 1, sm: 5, md: 5 }}>
					<Grid item xs={12} md={6}>
						<StandardImageList itemData={product.images} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack spacing={5}>
							<Card sx={{ padding: 3 }} raised>
								<Typography variant='body2' gutterBottom>
									{product.brand}
								</Typography>
								<Typography variant='h4' gutterBottom>
									{product.title}
								</Typography>
								<Typography gutterBottom>
									{product.description}
								</Typography>
								<Divider sx={{marginBlock:3}} />
								<ListItemText
									primary='Type: '
									secondary = {product.category}
								/>
								<ListItemText
									primary='Stocks: '
									secondary = {product.stock}
								/>
								<Typography variant='h5' sx={{ paddingBlock: 3 }}>
									${product.price}
								</Typography>
								<Stack direction={'row'} spacing={3}>
									<Input
										placeholder='Quantity'
										type='number'
										value={1}
										inputProps={{ min: 1, max: product.stock }}
										sx={{ width: 100 }}
									/>
									<Button variant='contained' sx={{ width: 150 }} >
										Add to Cart
									</Button>
								</Stack>
								<BasicRating value={product.rating} />
							</Card>

							<Card sx={{ padding: 3 }}>
								<Typography variant='h5' gutterBottom>Comments</Typography>
								<Divider />
								<List>
								{comments.map((comment: CommentType) => {
									return (
										<ListItem key={comment.id}>
											<ListItemText 
												primary={comment.body} 
												secondary={comment.user.username} 
											/>
											
										</ListItem>
									)
								})}
								</List>
							</Card>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Product