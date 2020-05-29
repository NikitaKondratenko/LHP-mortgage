import React, {
  useState, memo, useEffect, useCallback,
} from 'react';
import {
  IonIcon,
} from '@ionic/react';
import { useSelector } from 'react-redux';

import InitialStateInterface from '../../store/reducer';
import { FEATURES } from '../../utils/constants';
import { getBarSizes } from '../../utils';

import classes from './ProfileBar.module.scss';

const ProfileBar: React.FC = () => {
  const {
    avatar_url: avatarUrl,
  } = useSelector((state: InitialStateInterface) => state.userInfo);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const updateWindowHeightOnResize = useCallback(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateWindowHeightOnResize);
    return () => window.removeEventListener('resize', updateWindowHeightOnResize);
  }, [updateWindowHeightOnResize]);

  return (
    <div className={classes.avatarWrapper}>
      <div
        className={classes.featuresWrapper}
      >
        {avatarUrl && <img className={classes.avatarImage} alt="avatar" src={avatarUrl} />}
        {FEATURES.map((item, index) => {
          const {
            distanceY,
            distanceX,
            scale,
          } = getBarSizes(windowHeight, index);
          return (
            <div
              key={item.label}
              style={{
                transform: `translateY(${distanceY}px) translateX(${distanceX}px) scale(${scale})`,
              }}
              className={classes.feature}
            >
              <IonIcon size="large" color="dark-grey" icon={item.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ProfileBar);

