import { Auth } from 'app/components/Auth/Loadable';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Auth />
      <span>HomePage </span>
    </>
  );
}
