import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableVerbs({dataVerbIrregulars}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, maxHeight: '700px' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Infinitive</StyledTableCell>
            <StyledTableCell>Past Simple</StyledTableCell>
            <StyledTableCell>Past Participle</StyledTableCell>
            <StyledTableCell>Meaning</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataVerbIrregulars?.map((row) => (
            <StyledTableRow key={row.infinitive}>
              <StyledTableCell component="th" scope="row" sx={{fontWeight: '800'}}>
                {row.infinitive}
              </StyledTableCell>
              <StyledTableCell>{row.pastSimple}</StyledTableCell>
              <StyledTableCell>{row.pastParticiple}</StyledTableCell>
              <StyledTableCell>{row.meaning}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
