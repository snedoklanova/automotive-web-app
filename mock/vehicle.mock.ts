import { defineMock } from 'vite-plugin-mock-dev-server'
import data from '../data/vehicles.json'

export default defineMock({
  url: 'http://localhost:5173/api/vehicles/:vehicleId',
  body: (req) => {
    const vehicle = data.find(v => v.id === req.params.vehicleId);
    return vehicle || {
      error: 'Vehicle not found'
    };
  }
});