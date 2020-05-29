import React, { memo } from 'react';
import { IonText } from '@ionic/react';
import cn from 'classnames';

import classes from './Logo.module.scss';

interface LogoProps {
  color?: string;
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ color, small }) => (
  <div
    className={cn(
      classes.logoWrapper,
      { [classes.small]: small },
    )}
  >
    <IonText color={color} className={classes.logoMain}>
      LHP
    </IonText>
    <IonText color={color} style={{ borderColor: color }} className={classes.logoSub}>
      MORTGAGE
    </IonText>
  </div>
);

export default memo(Logo);
