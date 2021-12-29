import React, {useEffect, useState} from 'react';
import {Menu, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import useReactRouter from 'use-react-router';
import {FINAL_LINK, GAMES_LINK, GROUPS_USERS_LINK, HOME_LINK, RROBIN_LINK, USERS_LINK} from "../../router/links";

const Header = () => {
    const {location, history} = useReactRouter();
    let [activeItem, setActiveItem] = useState(location.pathname);
    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location.pathname]);

    return (
        <Segment inverted color='orange' className='tounirken-header'>
            <Menu inverted color='orange' className='font-poppins' stackable>
                <Menu.Item
                    style={{fontSize: '30px', padding: '10px', fontWeight: 800}}
                    name='TOURNIRKEN'
                    as={Link}
                    to={HOME_LINK}
                />
                <Menu.Item
                    style={{fontSize: '20px', padding: '10px', fontWeight: 400}}
                    name='ЧЕМПИОНАТ БУНКЕРА ПО МОРСКОМУ БОЮ - 2021'
                />
                <Menu.Item
                    style={{fontSize: '20px', padding: '10px', fontWeight: 400}}
                    name='участники'
                    as={Link}
                    to={USERS_LINK}
                    active={activeItem.includes(USERS_LINK)}
                />
                <Menu.Item
                    style={{fontSize: '20px', padding: '10px', fontWeight: 400}}
                    name='матчи'
                    as={Link}
                    to={GAMES_LINK}
                    active={activeItem.includes(GAMES_LINK)}
                />
                <Menu.Item
                    style={{fontSize: '20px', padding: '10px', fontWeight: 400}}
                    name='составы групп'
                    as={Link}
                    to={GROUPS_USERS_LINK}
                    active={activeItem.includes(GROUPS_USERS_LINK)}
                />
                <Menu.Item
                    style={{fontSize: '20px', padding: '10px', fontWeight: 400}}
                    name='генератор матчей'
                    as={Link}
                    to={RROBIN_LINK}
                    active={activeItem.includes(RROBIN_LINK)}
                />
                <Menu.Item
                    style={{fontSize: '20px', padding: '10px', fontWeight: 400}}
                    name='ФИНАЛ'
                    as={Link}
                    to={FINAL_LINK}
                    active={activeItem.includes(FINAL_LINK)}
                />
            </Menu>
        </Segment>
    )
}
export default Header;