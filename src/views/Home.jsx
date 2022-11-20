import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TableVerbs from "../components/TableVerbs";
import { dataVerbIrregulars } from "../helpers/dataVerbsIrregulars";
import SearchIcon from '@mui/icons-material/Search';


export default function Home() {
  const [arrayData, setArrayData] = useState(dataVerbIrregulars);

  const [searchValue, setSearchValue] = useState('')

  function handleChangeSearch(e) {
    let valueText = e.target.value;
    // valueText.toLowerCase()
    
    let newArray = dataVerbIrregulars.filter(item => item.infinitive.slice(0, valueText.trim().length) === valueText.trim().toLowerCase());
    setArrayData(newArray)
    setSearchValue(valueText);



  }

  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography
        component="h1"
        color="white"
        sx={{
          fontSize: {md:"3rem", sm: '2.8rem', xs: '2.2rem'},
          alignSelf: "center",
          marginTop: {md:"2.2rem", sm: '1.8rem', xs: '1.2rem'},
          marginBottom: {md:"2.2rem", sm: '1.8rem', xs: '1.2rem'},
          fontFamily: 'sans-serif'
        }}
      >
        Irregular Verbs.
      </Typography>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {md:"row", sm: 'column', xs: 'column'},
          justifyContent: "space-between",
          alignItems: 'center',
          backgroundColor: '#fafafa',
          borderRadius: '5px',
          boxSizing: 'border-box',
          padding: '2rem 1.5rem',
          marginBottom: '1.5rem'
        }}
      >
      <Box component="div"
        sx={{
          flex: '2',
          display: "flex",
          justifyContent: "flex-start",
          alignItems: 'center',
          
          boxSizing: 'border-box'
        }}>

        <TextField
          id="outlined-basic"
          label="Search verb infinitive"
          variant="outlined"
          size="large"
          onChange={handleChangeSearch}
          value={searchValue}
          sx={{
           
          }}
        />
        <SearchIcon sx={{
          fontSize: '2.5rem',
          color: '#333'
        }}/>
      </Box>
        <Typography
          component="p"
          color="#333"
          sx={{
            flex: '1',
            alignSelf: "center",
            fontSize: '1.2rem',
            fontFamily: 'sans-serif'
          }}
        >
          <Box component="span" sx={{color: 'red', fontSize: '2rem'}}>*</Box>Could be conjugated as a regular verb
        </Typography>
      </Box>
      <TableVerbs dataVerbIrregulars={arrayData} />
    </Container>
  );
}
