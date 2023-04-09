import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './navbar.css'
import Example from './Canvas'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const NavbarCard = ({ size, cart, setCart, handleChange }) => {
    const { t } = useTranslation()

    const onChange = (event) => {
        i18next.changeLanguage(event.target.value)
      }

    return (
        <>
            <Container>
                <Row className='mt-4'>
                    <Col xs={12}>
                        <nav >
                            <div className="nav_box">
                              <Link to="/home"> <span className="my_shop" >{t("text.MyShopping")}</span></Link>
                                <div className='justify-content-between d-flex pt-2'>

                                  <Link to="/table"><li style={{ listStyle: "none", paddingRight: "50px" }} className="list_item">{t("text.TABLE")}</li></Link>

                                    <Link to="/create"><li style={{ listStyle: "none", paddingRight: "50px" }} className="list_item">{t("text.CREATE")}</li></Link>
                                </div>

                                <div className="div d-flex">
                                    <select onChange={onChange} style={{ listStyle: "none", border: "none", marginLeft: "100px" }} name="translation" id="1">
                                        <option value="ru">Russian</option>
                                        <option value="eng">English</option>
                                        <option value="uz">Uzbek</option>
                                    </select>
                                    <div className="cart" >
                                        <span>
                                            <Example cart={cart} setCart={setCart} handleChange={handleChange} />
                                        </span>
                                        <span>{size}</span>

                                    </div>
                                </div>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NavbarCard