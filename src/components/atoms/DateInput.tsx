import React from 'react';
import { TextField } from '@mui/material';

interface DateInputProps {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
}

const DateInput: React.FC<DateInputProps> = ({ id, value, onChange, onBlur, error, helperText }) => {
    return (
        <TextField
            label="Date"
            id={id}
            type="date"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            helperText={helperText}
        />
    );
};

export default DateInput;
