import React, { FC, useState } from 'react';
import { ReactComponent as NontificatonIcon } from '../../../../images/svg/notifications.svg'
import classes from './Nontification.module.scss';

const Nontification: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggleVisibleClass = (visible: boolean) => {
        if (!visible) {
            return classes.dropdown + ' ' + classes.visible
        } else {
            return classes.dropdown
        }
    }

    return <div>
        <div
            className={classes.nontification}
            tabIndex={0}
            onClick={() => setVisible(!visible)}
        >
            <NontificatonIcon />
        </div>
        <div className={toggleVisibleClass(visible)}>
            <h1>DROPDOWN</h1>
        </div>
    </div>
};

export default Nontification;
