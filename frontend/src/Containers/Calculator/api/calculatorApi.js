import axios from 'axios'
import apiIndex from '../../../api/apiIndex'

export const calculate = (data) => {
  return axios.post(`${apiIndex.commons.baseUrl}/calculate/`, data)
}
