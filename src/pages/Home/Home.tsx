import React, { memo, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonIcon,
  IonText,
} from '@ionic/react';
import {
  settingsSharp,
} from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../store/actions';
import InitialStateInterface from '../../store/reducer';
import Logo from '../../components/Logo';
import Steps from '../../components/Steps';
import Menu from '../../components/Menu';
import ProfileBar from '../../components/ProfileBar';
import { TEST_OFFICER_ID } from '../../utils/constants';

import classes from './Home.module.scss';

const { getUserInfo } = actions;

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const {
    firstname,
    lastname,
    nmls,
  } = useSelector((state: InitialStateInterface) => state.userInfo);

  useEffect(() => {
    dispatch(getUserInfo(TEST_OFFICER_ID));
  }, [dispatch]);

  return (
    <>
      <Menu />
      <IonPage id="home-page">
        <IonToolbar className={classes.toolbar} color="primary">
          <div className={classes.toolbar}>
            <IonButtons slot="start">
              <IonMenuButton autoHide={false} color="white" />
            </IonButtons>
            <Logo color="white" small />
            <div className="ion-margin-end">
              <IonIcon size="medium" color="white" icon={settingsSharp} />
            </div>
          </div>
        </IonToolbar>
        <IonContent color="light" className="ion-padding-bottom">
          <div className={classes.profileContainer}>
            <div className={classes.profileWrapper}>
              <IonText color="white">
                {firstname && lastname && (
                  <div className={classes.name}>{`${firstname} ${lastname}`}</div>
                )}
              </IonText>
              <IonText color="white">
                {nmls && <div className={classes.nmls}>{`NMLS: #${nmls}`}</div>}
              </IonText>
              <ProfileBar />
            </div>
          </div>
          <Steps />
        </IonContent>
      </IonPage>
    </>
  );
};

export default memo(Home);
