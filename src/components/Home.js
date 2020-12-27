import React from 'react';
import Button from '@material-ui/core/Button';

import {
  Link
} from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Willkommen auf unserer Homepage :)</h1>
      <h4>Bist du zum ersten Mal hier? Dann klicke auf den Button um dich zu registrieren.</h4>
      <Link to="/sign-up/">
        <Button variant="contained">
         registrieren
        </Button>
      </Link>
      <h4>Um dich einzuloggen nutze diesen Button.</h4>
      <Link to="/sign-in">
        <Button variant="contained" color="secondary">
          anmelden
        </Button>
      </Link>
    </div>
  );
}