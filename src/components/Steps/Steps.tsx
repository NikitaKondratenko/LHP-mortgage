import React, { memo } from 'react';
import {
  IonText,
} from '@ionic/react';

import documentsStepImg from '../../assets/documentsStep.png';

import classes from './Steps.module.scss';

const Steps: React.FC = () => (
  <div className={classes.wrapper}>
    <IonText color="dark-grey">
      <div className={classes.stepsText}>Next steps:</div>
    </IonText>
    <img className={classes.documentsStepImg} alt="documents step" src={documentsStepImg} />
    <IonText color="dark-grey">
      <div className={classes.uploadText}>Upload Documents</div>
    </IonText>
  </div>
);

export default memo(Steps);
