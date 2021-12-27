import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Score = styled(Paper)(({ theme }) => ({
   [theme.breakpoints.up('xs')]: {
      minWidth: 80,
   },
   [theme.breakpoints.up('md')]: {
      minWidth: 150,
   },
}));
export const S = {
   Score,
};
