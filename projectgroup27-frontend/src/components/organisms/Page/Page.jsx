import React from 'react';

import { Header } from '../../molecules/Header/Header';
import './page.css';
import HomePage from "../Homepage/HomePage";

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <HomePage/>
    </article>
  );
};
