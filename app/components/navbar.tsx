"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import { Fade } from '@mui/material';

const pages = [
  { title: 'Blog', path: '/blog' },
  { title: 'Account', path: '/account' },
  { title: 'Dashboard', path: '/dashboard' },
];

const modalStyle = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bgcolor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  outline: 'none'
};

const menuItemStyle = {
  color: 'white',
  fontSize: '2rem',
  fontFamily: 'var(--font-geist-sans)',
  cursor: 'pointer',
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'all 0.5s ease-out',
  '&:hover': {
    transform: 'scale(1.1)',
  }
};

const closeButtonStyle = {
  position: 'absolute' as const,
  top: '2rem',
  right: '2rem',
  color: 'white',
  transition: 'transform 0.3s ease-in-out',
  opacity: 0,
  transform: 'rotate(-180deg) scale(0.8)',
  '&.visible': {
    opacity: 1,
    transform: 'rotate(0) scale(1)',
  },
  '&:hover': {
    transform: 'rotate(90deg) scale(1.1)',
  }
};

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [itemsVisible, setItemsVisible] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => {
        setItemsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setItemsVisible(false);
    }
  }, [menuOpen]);

  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => {
    setItemsVisible(false);
    setTimeout(() => {
      setMenuOpen(false);
    }, 300);
  };

  const handleMenuClick = (path: string) => {
    handleCloseMenu();
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box 
              sx={{ 
                width: '100%', 
                top: '50px',
                display: 'flex', 
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <Box 
                sx={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  zIndex: 1
                }}
              >
                <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  onClick={() => router.push('/')}
                  sx={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontWeight: 700,
                    letterSpacing: '.10rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Carbo
                </Typography>
              </Box>

              <Box 
                sx={{ 
                  marginLeft: 'auto',
                  right: '150px',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <Tooltip title="Menu">
                  <IconButton 
                    onClick={handleOpenMenu}
                    sx={{ 
                      color: 'white',
                      padding: '8px'
                    }}
                  >
                    <CiMenuBurger size={30} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Modal
        open={menuOpen}
        onClose={handleCloseMenu}
        aria-labelledby="menu-modal"
        aria-describedby="navigation-menu"
        closeAfterTransition
      >
        <Fade in={menuOpen} timeout={300}>
          <Box sx={modalStyle}>
            <IconButton
              onClick={handleCloseMenu}
              sx={{
                ...closeButtonStyle,
                transition: 'all 0.5s ease-out',
                transitionDelay: '0.3s',
                ...(itemsVisible && {
                  opacity: 1,
                  transform: 'rotate(0) scale(1)',
                })
              }}
            >
              <IoClose size={32} />
            </IconButton>

            {pages.map((page, index) => (
              <Typography
                key={page.title}
                onClick={() => handleMenuClick(page.path)}
                sx={{
                  ...menuItemStyle,
                  transitionDelay: `${index * 100 + 300}ms`,
                  ...(itemsVisible && {
                    opacity: 1,
                    transform: 'translateY(0)'
                  })
                }}
              >
                {page.title}
              </Typography>
            ))}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}