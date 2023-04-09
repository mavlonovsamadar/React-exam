import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import AxiosDyn from '../dynamicAxios/AxiosDyn'
import { useTranslation } from 'react-i18next'

const CreateData = () => {
  const { t } = useTranslation()

const [title, setTitle] = useState('')
const [price, setPrice] = useState('')
const [orprice, setOrprice] = useState('')
const [size, setSize] = useState('')
const [img, setImg] = useState('')
const [amount, setAmount] = useState('')
const navigate = useNavigate("")

    const createAllData = async () => {

let data = {
    title: title,
    price: Number(price),
    orprice: Number(orprice),
    size: Number(size),
    img: img,
    amount:Number(amount),
}

let url = "http://localhost:3000/data"

await AxiosDyn(url, data).then((res)=>{
    alert("Success")
    setTitle("")
    setPrice("")
    setOrprice("")
    setSize("")
    setImg("")
    navigate("/table")
    setAmount('')
})
    }


  return (
    <>
 <Container>
        <Row className='justify-content-center mt-4'>
          <Col xs={7}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{t("text.Name")}</Form.Label>
                <Form.Control type="text" placeholder={t("text.Name")} onChange={(e) => setTitle(e.target.value)} />
                {title.length < 1 ? <p>{t("text.Error")}</p> : <p>{t("text.success")}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{t("text.Price")}</Form.Label>
                <Form.Control type="text" placeholder={t("text.Price")}onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{t("text.Orprice")}</Form.Label>
                <Form.Control type="text" placeholder={t("text.Orprice")}onChange={(e) => setOrprice(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{t("text.Image")}</Form.Label>
                <Form.Control type="text" placeholder={t("text.Image")} onChange={(e) => setImg(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{t("text.Size")}</Form.Label>
                <Form.Control type="text" placeholder={t("text.Size")} onChange={(e) => setSize(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{t("text.Amount")}</Form.Label>
                <Form.Control type="text" placeholder={t("text.Amount")} onChange={(e) => setAmount(e.target.value)} />
              </Form.Group>
              {(title.length<1 || price.length<1 || price.length<1 || orprice.length<1 || img.length<1 ) ? <Button style={{ width: "100%" }} variant="danger" >
              {t("text.Submit")}
              </Button> : <Button style={{ width: "100%" }} variant="primary" onClick={createAllData}>
              {t("text.Submit")}
              </Button>}
              
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreateData