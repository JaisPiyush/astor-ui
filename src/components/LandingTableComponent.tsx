
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { indexTokens } from '../tokens';
import { Avatar, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Token } from '../types';
import { useGetIndexTokenData } from '../hooks/useGetIndexTokenData';

interface Column {
  id: 'name' | 'price' | 'tvl';
  label: string;
  minWidth?: number;
  align?: TableCellProps['align'];
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Token', minWidth: 80 },
  { id: 'price', label: 'Price', minWidth: 50, align: 'left',
  format: (value: number) => `$${value.toFixed(2)}`
},
  {
    id: 'tvl',
    label: 'TVL',
    minWidth: 80,
    align: 'left',
    format: (value: number) => {
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
    },
  },
];


const rows = indexTokens;

export default function LandingTableComponent() {
  const page = 0
  const rowsPerPage = 10;



  return (
    <Paper sx={{ width: '60%', overflow: 'hidden'}}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                   <IndexTokenRow key={row.address} row={row} />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}


const IndexTokenRow = ({row}: {row: Token}) => {
  const navigate = useNavigate();

  const [price, tvl] = useGetIndexTokenData(row.address);

  const handleOnRowClick = (address: string) => {
    navigate(`/${address}/index`)
  }

  return (<TableRow hover role="checkbox" tabIndex={-1}  onClick={() => {handleOnRowClick(row.address)}}>
  <TableCell key={columns[0].id} align={columns[0].align}>
      <Box sx={{width: '100%', display: 'flex', textAlign: 'center', alignItems: 'center'}}>
      <Avatar src={row.url} />
      <Typography sx={{mx: '1rem'}}>{row.symbol}</Typography>
      </Box>
  </TableCell>
  <TableCell key={columns[1].id} align={columns[1].align}>
    <Typography>{columns[1].format!(price)}</Typography>
  </TableCell>
  <TableCell key={columns[2].id} align={columns[2].align}>
    <Typography>{columns[2].format!(tvl)}</Typography>
  </TableCell>
</TableRow>)
}