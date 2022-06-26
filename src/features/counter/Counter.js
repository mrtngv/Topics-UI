import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center">
                    <Button onClick={() => dispatch(increment())} variant="contained">Increment</Button>
                    <Button onClick={() => dispatch(decrement())}variant="outlined">Decrement</Button>
                    <Typography variant="h6" align="center" gutterBottom>{count}</Typography>
                </Stack>

            </div>
        </div>
    )
}