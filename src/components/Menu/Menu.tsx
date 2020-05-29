import React, { memo } from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonText,
} from '@ionic/react';
import { useSelector } from 'react-redux';

import InitialStateInterface from '../../store/reducer';
import { MENU_ITEMS } from '../../utils/constants';

import classes from './Menu.module.scss';

const Menu: React.FC = () => {
  const { menuContentId } = useSelector((state: InitialStateInterface) => state);

  return (
    <IonMenu side="start" menuId="main-content" contentId={menuContentId}>
      <IonHeader>
        <IonToolbar color="white">
          <IonTitle className={classes.title}>Navigation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {MENU_ITEMS.map(({ label, icon }) => (
            <IonItem key={label} detail>
              <IonIcon icon={icon} />
              <IonText className="ion-margin-start">{label}</IonText>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default memo(Menu);
