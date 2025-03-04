'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Farmer {
  firstName: string;
  lastName: string;
  age: number;
  function: string;
}

interface TableProps {
  farmers: Farmer[];
}

export default function CustomizedTables({ farmers }: TableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Sobrenome</StyledTableCell>
            <StyledTableCell align="right">Idade</StyledTableCell>
            <StyledTableCell align="right">Produção</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {farmers.map((farmer, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {farmer.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{farmer.lastName}</StyledTableCell>
              <StyledTableCell align="right">{farmer.age}</StyledTableCell>
              <StyledTableCell align="right">{farmer.function}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
