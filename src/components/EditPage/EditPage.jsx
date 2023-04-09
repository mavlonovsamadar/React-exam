import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

const EditPage = () => {
    const { t } = useTranslation()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [orprice, setOrprice] = useState('')
    const [size, setSize] = useState('')
    const [img, setImg] = useState('')
    const [amount, setAmount] = useState('')
    const navigate = useNavigate("")

    const { id } = useParams()
    console.log(id);

    const getOne = (id) => {
        axios.get(`http://localhost:3000/data/${id}`).then((data) => {
            setTitle(data?.data.title)
            setPrice(data?.data.price)
            setOrprice(data?.data.orprice)
            setSize(data?.data.size)
            setImg(data?.data.img)
            setAmount(data?.data.amount)
        })
    }

    useEffect(() => {
        getOne(id)
    }, [id])

    const editData = () => {

        let obj = {
            title: title,
            price: price,
            orprice: orprice,
            size: size,
            img: img,
            amount:amount,
        }

        axios.put(`http://localhost:3000/data/${id}`, obj).then((res) => {
            alert(res.statusText)
            navigate("/table")
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
                                <Form.Control type="text" placeholder={t("text.Name")} onChange={(e) => setTitle(e.target.value)} value={title} />
                                {title.length < 1 ? <p>{t("text.Error")}</p> : <p>{t("text.success")}</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t("text.Price")}</Form.Label>
                                <Form.Control type="text" placeholder={t("text.Price")} onChange={(e) => setPrice(e.target.value)} value={price} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t("text.Orprice")}</Form.Label>
                                <Form.Control type="text" placeholder={t("text.Orprice")} onChange={(e) => setOrprice(e.target.value)} value={orprice} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t("text.Image")}</Form.Label>
                                <Form.Control type="text" placeholder={t("text.Image")} onChange={(e) => setImg(e.target.value)} value={img} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t("text.Size")}</Form.Label>
                                <Form.Control type="text" placeholder={t("text.Size")} onChange={(e) => setSize(e.target.value)} value={size} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t("text.Amount")}</Form.Label>
                                <Form.Control type="text" placeholder={t("text.Amount")} onChange={(e) => setAmount(e.target.value)} value={amount} />
                            </Form.Group>
                            {title.length < 1 || price.length < 1 || orprice.length < 1 || img.length < 1 ? <Button style={{ width: "100%" }} variant="danger" >
                            {t("text.Error")}
                            </Button> : <Button style={{ width: "100%" }} variant="primary" onClick={editData} >
                            {t("text.success")}
                            </Button>}

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditPage