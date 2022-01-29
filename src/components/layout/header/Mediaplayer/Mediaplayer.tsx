import React, { FC, useState } from 'react';
import { ReactComponent as PlayIcon } from '../../../../images/svg/player/play.svg'
import { ReactComponent as PlayBackIcon } from '../../../../images/svg/player/play-skip-back.svg'
import { ReactComponent as PlayForwardIcon } from '../../../../images/svg/player/play-skip-forward.svg'
import { ReactComponent as PauseIcon } from '../../../../images/svg/player/pause.svg'
import ClickAwayListener from 'react-click-away-listener';
import classes from './Mediaplayer.module.scss';

const Mediaplayer: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const toggleVisibleClass = (visible: boolean) => {
        if (visible) {
            return classes.dropdown + ' ' + classes.visible
        } else {
            return classes.dropdown
        }
    }



    return <ClickAwayListener onClickAway={() => setVisible(false)}>
            <div>
            <div className={classes.player} tabIndex={0}>
            <div className={classes.buttons}>
                <button className={classes.playback}>
                    <PlayBackIcon />
                </button>
                <button className={classes.play} onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ?
                        <PauseIcon />
                        :
                        <PlayIcon />
                    }
                </button>
                <button className={classes.playforward}>
                    <PlayForwardIcon />
                </button>
            </div>
            <div className={classes.songname} onClick={() => setVisible(!visible)}>
                <div className={classes.points}>Kanye West - POWER</div>
            </div>

        </div>
        <div className={toggleVisibleClass(visible)}>
            <p className={classes.title}>Музыка</p>
            <hr />

        </div>
            </div>
        </ClickAwayListener>

};

export default Mediaplayer;
