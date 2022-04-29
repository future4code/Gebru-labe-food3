import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/'
})