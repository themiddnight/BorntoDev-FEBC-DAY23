import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import StorefrontIcon from '@mui/icons-material/Storefront';

const brandName = 'MIDDNIGHT';

const pages = [
	{ name: 'Products', href: '/' },
	{ name: 'Checkout', href: '/checkout' },
];

function Navbar() {

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="sticky">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<StorefrontIcon sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', sm: 'flex' },
							fontWeight: 700,
							letterSpacing: '.2rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						{brandName}
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', sm: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page.name} onClick={handleCloseNavMenu}>
									<Typography
										sx={{ textDecoration: 'none', color: 'inherit' }}
										textAlign="center"
										component='a'
										href={page.href}
									>
										{page.name}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>


					<StorefrontIcon sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'flex', sm: 'none' },
							flexGrow: 1,
							fontWeight: 700,
							letterSpacing: '.2rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						{brandName}
					</Typography>
					<Box sx={{ flexGrow: 4, display: { xs: 'none', sm: 'flex' } }}>
						{pages.map((page) => (
							<Button
								href={page.href}
								key={page.name}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page.name}
							</Button>
						))}
					</Box>


				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;