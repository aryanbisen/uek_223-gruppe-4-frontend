import { Box } from '@mui/system';
import logo from '../../ourspacelogo.png';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function AdminPage() {
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
          Welcome to the admin page
        </h1>
      </Box>
  );
}
