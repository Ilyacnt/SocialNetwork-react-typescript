import React, { FC } from 'react';
import Button, { ButtonVariant } from '../../../ui/button/Button';
import classes from './Sidebar.module.scss';
import { ReactComponent as ProfileIcon } from '../../../images/svg/sidebar/person-circle.svg'
import { ReactComponent as NewsIcon } from '../../../images/svg/sidebar/newspaper.svg'
import { ReactComponent as ChatIcon } from '../../../images/svg/sidebar/chatbubble.svg'
import { ReactComponent as FriendsIcon } from '../../../images/svg/sidebar/people.svg'
import { ReactComponent as ImagesIcon } from '../../../images/svg/sidebar/image.svg'
import { ReactComponent as MusicIcon } from '../../../images/svg/sidebar/musical-notes.svg'
import { ReactComponent as FavoriteIcon } from '../../../images/svg/sidebar/star.svg'
import { Link } from 'react-router-dom';


const Sidebar: FC = () => {
  return <div className={classes.sidebar}>
    <Link to='/profile' style={{textDecoration: 'none', color: 'initial'}}>
      <div className={classes.buttonwrap}>
        <ProfileIcon/>
        <span className={classes.button} >Моя страница</span>
      </div>
    </Link>

    <Link to='/news' style={{textDecoration: 'none', color: 'initial'}}>
      <div className={classes.buttonwrap}>
        <NewsIcon/>
        <span className={classes.button} >Новости</span>
      </div>
    </Link>

    <Link to='/messages' style={{textDecoration: 'none', color: 'initial'}}>
      <div className={classes.buttonwrap}>
        <ChatIcon/>
        <span className={classes.button} >Сообщения</span>
      </div>
    </Link>

    <Link to='/friends' style={{textDecoration: 'none', color: 'initial'}}>
      <div className={classes.buttonwrap}>
        <FriendsIcon/>
        <span className={classes.button} >Друзья</span>
      </div>
    </Link>

    <Link to='/photos' style={{textDecoration: 'none', color: 'initial'}}>
      <div className={classes.buttonwrap}>
        <ImagesIcon/>
        <span className={classes.button} >Фотографии</span>
      </div>
    </Link>

    <Link to='/music' style={{textDecoration: 'none', color: 'initial'}}>
      <div className={classes.buttonwrap}>
        <MusicIcon/>
        <span className={classes.button} >Музыка</span>
      </div>
    </Link>

    <Link to='/favorite' style={{textDecoration: 'none', color: 'initial', marginTop: '20px'}}>
      <div className={classes.buttonwrap}>
        <FavoriteIcon/>
        <span className={classes.button} >Закладки</span>
      </div>
    </Link>
    

  </div>;
};

export default Sidebar;
