import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
    label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
    return (
        <Button type="submit" color="primary" variant="contained" fullWidth>
            {label}
        </Button>
    );
};

export default SubmitButton;
