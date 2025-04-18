import { Box } from '@mui/system';
import logo from '../../ourspacelogo.png';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
      <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height="100vh"
          sx={{
              background: 'linear-gradient(135deg, #1a1a1a, #2e004f)',
              color: '#fff',
            textAlign: 'center',
          }}
      >
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Welcome to Ourspace
        </h1>
          <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                  maxWidth: '350px',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                      transform: 'scale(1.1)',
                  },
              }}
          />
          <Button
              variant="contained"
              sx={{
                  mt: 3,
                  backgroundColor: '#CBC3E3',
                  '&:hover': { backgroundColor: '#2e004f' },
              }}
              onClick={() => navigate('/login')}
          >
              Login
          </Button>
      </Box>
  );
}
