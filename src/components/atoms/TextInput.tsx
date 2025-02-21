import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
    label: string;
    id: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, id, placeholder, value, onChange, onBlur, error, helperText }) => {
    return (
        <TextField
            label={label}
            id={id}
            placeholder={placeholder}
            fullWidth
            required
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            helperText={helperText}
        />
    );
};

export default TextInput;
