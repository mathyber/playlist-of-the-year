import React from 'react';
import './style.css';
import logo from "../../images/logo2-0.png";
import logo2 from "../../images/mb2021.png";
import {Image} from "semantic-ui-react";
import gamesJSON from '../../jsons/games.json';

const GroupUsers = ({id, users, name}) => {

    const winTest = (a, b) => {
        console.log(a.user.id, a.idsWin.includes(b.user.id), b.user.id);
        //потом логеку напешу
        return 0;
    }

    const usersSort = () => {
        const usersN = users.map(u=>resultUser(u)).sort(function(a, b) {
            return b.points - a.points  ||  b.r - a.r || winTest(a,b); //|| (a.idsWin.includes(b.user.id) ? 1 : -1);
        });
        console.log("usersN")
        console.log(usersN)
        return usersN.map(un => users.find(u => u.id === un.user.id));
    }

    const resultUser = (user) => {
        let win = 0;
        let n = 0;
        let lose = 0;
        let userG = 0;
        let noUserG = 0;
        let results = [];

        let rr = gamesJSON.filter(g => (g.user1 === user.id || g.user2 === user.id) && g.stage === "group").sort((a, b) => a.round - b.round);

        let rs = rr.map(r => {
            return {
                ...r,
                results: [r.result1, r.result2, r.result3, r.result4, r.result5]
            }
        });
        let idsWin = [];

        rs.forEach(res => {
            let userR = res.results.filter(r => r && r === user.id).length;
            let noUserR = res.results.filter(r => r && r !== user.id).length;

            if (userR > noUserR) {
                win = win + 1;
                results.push(1);
                console.log(res.results.find(r => r && r !== user.id))
                idsWin.push(res.results.find(r => r && r !== user.id))
            }
            if (userR === noUserR && res.results.filter(r => r).length) {
                n = n + 1;
                results.push(2);
            }
            if (userR < noUserR) {
                lose = lose + 1;
                results.push(3);
            }

            if (res.results.filter(r => r).length === 0) {
                results.push(0);
            }

            userG = userG + userR;
            noUserG = noUserG + noUserR;
        });

        return {
            user, win, n, lose, userG, noUserG, results, points: (win*3)+(n), r: userG - noUserG, idsWin
        }
    }

    const rez = (type) => {
        let color1;
        let color2;
        switch (type) {
            case 1: {
                color1 = 'rgb(24,255,0)';
                color2 = 'rgb(17,196,0)';
                break
            }
            case 2: {
                color1 = 'rgb(0,140,255)';
                color2 = 'rgb(0,97,175)';
                break
            }
            case 3: {
                color1 = 'rgb(255,0,0)';
                color2 = 'rgb(180,0,0)';
                break

            }
            default : {
                color1 = 'rgba(255,0,0,0)';
                color2 = 'rgba(180,0,0,0)';
                break
            }
        }
        let bg = `linear-gradient(${color1}, ${color2})`;
        return <div style={{background: bg, width: '40px', height: '100px', marginTop: '-40px'}}/>
    }

    const user = (user, index, isRez = true) => {
        console.log(resultUser(user))
        let res = resultUser(user);
        return (
            <div className='group-users__user' id={'grus' + index}>
                <div style={{
                    background: `linear-gradient(${user.color1}, ${user.color2})`,
                    width: '50px',
                    height: '100px',
                    marginTop: '-40px'
                }}/>
                <Image src={user.photo} avatar
                       style={{width: '60px', height: '60px', marginLeft: '20px', marginTop: '-18px'}}/>
                <div style={{width: '700px'}}>{user.user.toUpperCase()}</div>
                {isRez && <>
                    {
                        res.results.map(r => rez(r))
                    }
                    <div style={{marginLeft: '20px', width: '160px'}}>{res.userG}:{res.noUserG}</div>
                    <div style={{width: '100px'}}>{res.userG - res.noUserG}</div>
                    <div style={{marginLeft: '20px', width: '100px', color: 'rgb(0,0,0)'}}>{res.points}</div>
                </>}

            </div>
        )
    }

    return (
        <div className='image-generation__image' id={id}>
            <div className='group-users'>
                <img src={logo} height={650} style={{position: 'absolute', bottom: -12, right: -13}}/>
                <img src={logo2} height={350} style={{position: 'absolute', top: 65, left: 70}}/>

                <div className='group-users__name'>ГРУППА {name}</div>
                <div className='group-users__users'>
                    {usersSort().map((u, index) => user(u, index))}
                </div>
            </div>
        </div>
    )
}
export default GroupUsers;