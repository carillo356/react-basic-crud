import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"

const RouterButton = (props) => {
  const navigate = useNavigate()

  return (
    <>
        <BootstrapButton 
          variant={props.variant ? props.variant : 'primary'} 
          onClick={() => navigate(props.navigate)}>
            {props.name}
        </BootstrapButton>{' '}
    </>
  )
}

export default RouterButton;
