import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IndexedToken } from '../types';
// import { tokens } from '../tokens';
import { useGetIndexedTokens } from '../hooks/useGetIndexedTokens';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Typography } from '@mui/material';
import { useAppDispatch } from '../store/hook';
import { globalActions } from '../store/globalSlice';

interface Column {
  id: keyof IndexedToken;
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 80 },
  {id: 'tvl', label: 'TVL', minWidth: 80, format: (value: number) => {
    const fixed = Number(value.toFixed(2));
    let num = fixed
    let suffix = ''
    if (fixed / 100000 >= 1) {
      num = fixed / 100000;
      suffix = 'm'
    } else if(fixed / 1000 >= 1) {
      num = fixed / 1000;
      suffix = 'k'
    }
    return `$${num.toFixed(3)}${suffix}`
  }},
  {id: 'share', label: 'Holdings', minWidth: 100}
];



export default function DashboardTableComponent() {

  const {address} = useParams();
  const tokens = useGetIndexedTokens(address as string);
  const dispatch = useAppDispatch();

  const handleOnClickRow = (row: IndexedToken) => {
    navigator.clipboard.writeText(row.address);
    dispatch(globalActions.setAlert({
      alert: `${row.name} address copied`,
      type: 'success'
    }))
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tokens
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} onClick={() => {handleOnClickRow(row)}}>
                  <TableCell key={columns[0].id} align={columns[0].align}>
                      <Box sx={{width: '100%', display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                      <Avatar src={row.url} />
                      <Typography sx={{mx: '1rem'}}>{`${row.name} (${row.symbol})`}</Typography>
                      </Box>
                  </TableCell>
                  <TableCell key={columns[1].id} align={columns[1].align}>
                    <Typography>{columns[1].format!(row.tvl)}</Typography>
                  </TableCell>
                  <TableCell key={columns[2].id} align={columns[2].align}>
                    <Typography>{row.share.toFixed(2)}%</Typography>
                  </TableCell>
                </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
