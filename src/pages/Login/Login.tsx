import React, {
  useState,
  useEffect,
  memo,
} from 'react';
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonText,
  IonInput,
  IonButton,
} from '@ionic/react';

import Logo from '../../components/Logo';

import classes from './Login.module.scss';

interface LoginProps {
  history: Array<string>;
}

const Login: React.FC<LoginProps> = (props) => {
  const { history } = props;
  const [email, handleEmail] = useState('');
  const [password, handlePassword] = useState('');

  useEffect(() => {
    const tabBar = document.getElementById('tab-bar');
    if (tabBar) tabBar.style.display = 'none';
  }, []);

  const onSubmit = () => {
    const tabBar = document.getElementById('tab-bar');
    history.push('/home');
    if (tabBar) tabBar.style.display = 'flex';
  };

  return (
    <IonPage>
      <IonContent>
        <div className={classes.content}>
          <Logo color="black" />
          <IonText color="primary" className="ion-margin">
            <div className={classes.hello}>Hello!</div>
          </IonText>
          <IonText color="black" className="ion-margin" style={{ width: '60%' }}>
            <div className={classes.description}>Let&apos;s login and review your loan info...</div>
          </IonText>
        </div>
        <div className={classes.loginForm}>
          <IonItem lines="none">
            <IonLabel
              position="stacked"
              className={classes.label}
            >
              Email
            </IonLabel>
            <IonInput
              value={email}
              className={classes.input}
              inputmode="email"
              pattern="email"
              placeholder="Enter Your Email"
              required
              onIonChange={(e) => handleEmail(e.detail.value!)}
            />
          </IonItem>
          <IonItem lines="none" className="ion-margin-top">
            <IonLabel
              position="stacked"
              className={classes.label}
            >
              Password
            </IonLabel>
            <IonInput
              value={password}
              className={classes.input}
              pattern="password"
              type="password"
              placeholder="Enter Your Password"
              clearOnEdit={false}
              required
              onIonChange={(e) => handlePassword(e.detail.value!)}
            />
          </IonItem>
          <IonButton
            onClick={onSubmit}
            expand="block"
            className={classes.submitButton}
            color="secondary"
          >
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default memo(Login);
