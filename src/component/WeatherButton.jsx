import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
          <Button variant="success">Current Location</Button>
          <Button variant="success">Australia</Button>
          <Button variant="success">Japan</Button>
          <Button variant="success">Busan</Button>
          <Button variant="success">Seoul</Button>
    </div>
  )
}

export default WeatherButton