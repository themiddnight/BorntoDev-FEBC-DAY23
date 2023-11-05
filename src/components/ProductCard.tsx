import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import formatNumber from '../utils/numericFormat'

type ProductCardProps = {
    id: string;
    title: string;
    brand: string;
    price: number;
    image: string;
    description: string;
};

export default function ProductCard({ id, title, brand, description, image, price }: ProductCardProps) {

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const addToCart = () => {
        // localStorage.clear()
        const cartData = []
        const cart = localStorage.getItem('cart')
        if (cart) {
            cartData.push(...JSON.parse(cart))
            cartData.push({ id, title, brand, description, image, price })
            // console.log(cartData)
            localStorage.setItem('cart', JSON.stringify(cartData))
        } else {
            localStorage.setItem('cart', JSON.stringify([{ id, title, brand, description, image, price }]))
        }
    }

    return (
        <Card
            raised
            sx={{ width: 340, height: 550 }}
        >
            <CardMedia
                component='a'
                href={'/' + id}
                sx={{ height: 250, margin: 3 }}
                image={image}
                title={title}
            />
            <CardContent sx={{ paddingInline: 3, pt:0 , display:'flex', flexDirection:'column'}}>
                <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        textTransform: 'uppercase',
                        letterSpacing: '.1rem',
                    }}
                >
                    {brand}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    component='a'
                    href={'/' + id}
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        height: '4rem'
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        lineClamp: 2,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        height: '2.8em'
                    }}
                >
                    {description}
                </Typography>
                <Typography variant="h6">
                    {`$${formatNumber(price)}`}
                </Typography>
            </CardContent>
            <CardActions sx={{ paddingInline: 3 }}>
                <Stack direction="row" spacing={1}>
                    <Chip color='primary' label='Add to Cart' onClick={addToCart}></Chip>
                    <Chip component='a' href={'/' + id} label='View More' onClick={handleClick}></Chip>
                </Stack>
            </CardActions>
        </Card>
    );
}