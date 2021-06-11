/**
 *
 * Auth
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { useCurrentUser } from 'hooks/current-user';

interface Props {}

export const Auth = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cu = useCurrentUser()
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}

    {cu.loggedIn ? 
      <div>
        <span>{cu.addr ?? "No Address"}</span>
        <button onClick={cu.logOut}>Log Out</button>
      </div>
      :
      <div>
        <button onClick={cu.logIn}>Log In</button>
        <button onClick={cu.signUp}>Sign Up</button>
      </div>      
    }
    </Div>
  );
});

const Div = styled.div``;