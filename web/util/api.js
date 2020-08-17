import axios from 'axios';
import {firebase} from './firebase';
import {getToken} from './firebase';

export const initBookingService = async () => {
  const token = await getToken();
  return new BookingService(token);
}

class BookingService {
  constructor(token) {
    this.token = token;
    this.axios = axios.create({
      baseURL: 'http://localhost:5001/storetest-613f3/us-central1/app',
      headers: {'X-API': this.token}
    });
  }

  createBooking(callback){
    this.axios.post('/booking')
    .then(data => {
      callback(data)
    })
    .catch(e => {
      callback(e);
    })
  }
}
export default BookingService;