import axios from "axios"

const AxiosDyn = (url, obj) => {
  return  axios.post(url, obj)
}

export default AxiosDyn