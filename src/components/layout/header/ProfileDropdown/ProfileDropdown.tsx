import React, { FC } from 'react';
import { ReactComponent as ChevronIcon } from '../../../../images/svg/chevron-down.svg'
import classes from './ProfileDropdown.module.scss'

const ProfileDropdown: FC = () => {
    return <div className={classes.flex}>
        <div className={classes.avatar}></div>
        <ChevronIcon />
    </div>;
};

export default ProfileDropdown;
