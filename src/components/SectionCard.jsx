import React, { useEffect, useState } from 'react'
import {  Col, Container, Form, Row } from 'react-bootstrap'
import Cards from './Cards'
//import list from '../data'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
//import Cards from './Cards'
const SectionCard = ({ handleClick }) => {
    const { t } = useTranslation()

    const [user, setUser] = useState([])
    const [value, setValue] = useState("")

    const getData = () => {
        axios.get("http://localhost:3000/data").then(data => {
            setUser(data.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Container>
                <Row className='justify-content-center mt-4' >
                    <Col xs={12}>
                        <div className="positiv">
                            <Form.Control className='search' type="text" placeholder={t("text.writeTitle")}onChange={(e) => setValue(e.target.value)} />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='justify-content-between mt-4'>
                    {user.filter((res) => {
                        return res.title.toLocaleLowerCase() === "" ? value : res.title.toLocaleLowerCase().includes(value)
                    }).map((item) => {
                        return (
                            <>
                                <Col xs={12} lg={3}>
                                    <Cards item={item} key={item.id} handleClick={handleClick} />
                                </Col>

                            </>
                        )
                    })
                    }
                </Row>
            </Container>
        </>
    )
}

export default SectionCard