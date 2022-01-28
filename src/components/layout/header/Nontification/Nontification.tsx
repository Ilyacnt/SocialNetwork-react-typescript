import React, { FC, useState } from 'react';
import { ReactComponent as NontificatonIcon } from '../../../../images/svg/notifications.svg'
import classes from './Nontification.module.scss';
import ClickAwayListener from 'react-click-away-listener';

const Nontification: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisibleClass = (visible: boolean) => {
        if (visible) {
            return classes.dropdown + ' ' + classes.visible
        } else {
            return classes.dropdown
        }
    }


    return <ClickAwayListener onClickAway={() => setVisible(false)}>
        <div>
            <div
                className={classes.nontification}
                tabIndex={0}
                onClick={() => setVisible(!visible)}
            >
                <NontificatonIcon />
            </div>
            <div className={toggleVisibleClass(visible)}>
                <p className={classes.title}>Уведомления</p>
                <hr />
            </div>
        </div>
    </ClickAwayListener>
};

export default Nontification;
