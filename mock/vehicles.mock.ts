import { defineMock } from 'vite-plugin-mock-dev-server'
import data from '../data/vehicles.json'

export default defineMock({
  url: 'http://localhost:5173/api/vehicles',
  body: () => ({
    vehicles: data || []
  }),
});