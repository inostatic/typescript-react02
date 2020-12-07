import axios from "axios"

const baseURL = 'http://www.filltext.com/'

export const fetchData = async (db: string) => {
  try {

    if (db === 'Большой') {
      return await axios.get(baseURL +
        '?rows=1000&' +
        'id={number|1000}&' +
        'firstName={firstName}&' +
        'delay=3&' +
        'lastName={lastName}&' +
        'email={email}&' +
        'phone={phone|(xxx)xxx-xx-xx}&' +
        'address={addressObject}&' +
        'description={lorem|32}')
    } else if (db === 'Маленький') {
      return await axios.get(baseURL +
        '?rows=32&' +
        'id={number|1000}' +
        '&firstName={firstName}&' +
        'lastName={lastName}&' +
        'email={email}&' +
        'phone={phone|(xxx)xxx-xx-xx}&' +
        'address={addressObject}&' +
        'description={lorem|32}')
    }

  } catch (e) {
    throw Error(e)
  }
}
