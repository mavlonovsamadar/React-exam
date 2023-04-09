import React from 'react'
import './cards.css'
import { useTranslation } from 'react-i18next'

const Cards = ({item, handleClick}) => {
  const { t } = useTranslation()
  
 const {img, title, author, price, size, orprice} = item

  return (
    <>
<div className="cards text-center ">
    <div className="image_box mt-2">
        <img src={img} alt="" />
        <p>{title}</p>
        <p>{author}</p>
        <div className='pClass'><p>{t("text.Price")} -${price}</p>
        <p>{t("text.or")} -{size} x ${orprice}</p>
        </div>
        <button onClick={() => handleClick(item)} style={{border:"none",  backgroundColor: "black", width:"100%", color:"white",  paddingTop: " 5px", paddingBottom: " 5px"}}>{t("text.AddtoCart")}</button>
    </div>
</div>
    </>
  )
}

export default Cards