import React, { FC } from 'react';
import {ReactComponent as PlayIcon}  from '../../../../images/svg/player/play.svg'
import {ReactComponent as PlayBackIcon}  from '../../../../images/svg/player/play-skip-back.svg'
import {ReactComponent as PlayForwardIcon}  from '../../../../images/svg/player/play-skip-forward.svg'
import classes from './Mediaplayer.module.scss';

const Mediaplayer: FC = () => {
    return <div className={classes.player}>
        <div className={classes.buttons}>
            <button className={classes.playback}>
                <PlayBackIcon />
            </button>
            <button className={classes.play}>
                <PlayIcon/>
            </button>
            <button className={classes.playforward}>
                <PlayForwardIcon />
            </button>
        </div>
        <div className={classes.songname}>
            Kanye West - POWER fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </div>
    </div>;
};

export default Mediaplayer;
