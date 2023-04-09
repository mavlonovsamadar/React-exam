import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const TableList = () => {
  const { t } = useTranslation()

const [rows, setRows] = useState()

const getAllData = () => {
    let url = "http://localhost:3000/data"
    axios.get(url).then((data)=>setRows(data?.data))
}
console.log(rows);

const deleteFunc = (id) => {
axios.delete(`http://localhost:3000/data/${id}`).then((res)=>{
    // Alert(res.statusText)
})
    setRows(rows.filter((el)=>el.id !== id))
}

useEffect(()=>{
    getAllData()
  }, [])

  const edite_func = (id) => {
    axios.patch(`http://localhost:3000/data/${id}`)
      .then((res) => {
        
      })
  }

  return (
    <>
<Container>
  <Row className='justify-content-center mt-5'>
    <Col xs={10}>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t("text.Image")}</TableCell>
            <TableCell align="right">{t("text.Name")}</TableCell>
            <TableCell align="right">{t("text.Price")}</TableCell>
            <TableCell align="right">{t("text.Orprice")}</TableCell>
            <TableCell align="right">{t("text.Amount")}</TableCell>
            <TableCell align="right">{t("text.Size")}</TableCell>
            <TableCell align="right">{t("text.Edit")}</TableCell>
            <TableCell align="right">{t("text.Delete")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow 
              key={row?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              

              <TableCell component="th" scope="row">
                <img src={row?.img} width={100} height={50} alt="" />
              </TableCell>
              <TableCell align="right" width={200}>{row?.title}</TableCell>
              <TableCell align="right">{row?.price}</TableCell>
              <TableCell align="right">{row?.orprice}</TableCell>
              <TableCell align="right">{row?.amount}</TableCell>
              <TableCell align="right">{row?.size}</TableCell>
              <Link to= {`/table/edit/${row?.id}`} > 
              <TableCell align="right"><Button style={{marginTop:"6px", marginRight:"-75px"}} variant="contained" onClick={()=>edite_func(row.id)}>{t("text.Edit")}</Button></TableCell>
              </Link>
              <TableCell align="right"><Button style={{marginLeft:"-30px"}} variant="contained" color="error" onClick={()=> deleteFunc(row.id)}>{t("text.Delete")}</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Col>
    </Row>
    </Container> 
    </>
  )
}

export default TableList