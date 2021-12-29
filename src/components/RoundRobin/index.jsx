import React from 'react';
import './style.css';
import {Segment, TextArea} from "semantic-ui-react";
import usersJSON from '../../jsons/users.json';
import groupJSON from '../../jsons/groups.json';
import robin from 'roundrobin';

const RRobin = () => {

    const thisIsACostyl = (roundNum) => {
        switch (roundNum) {
            case 1: return 1;
            case 2: return 2;
            case 3: return 3;
            case 4: return 4;
            case 5: return 5;
        }
    }


    const generator = () => {

        let games = [];

        groupJSON.forEach(g => {
            games.push({name: g.name, games: robin(g.users.length, g.users)})
        });

        let maxRounds = Math.max(...games.map(g=>g.games.length));

        let rounds = []

        for (let i = 0; i < maxRounds; i++){
            rounds.push({
                round: thisIsACostyl(i+1),
                matches: games.map(gms=>{
                    return {
                        group: gms.name,
                        matches: gms.games[i] ? gms.games[i].map(g=>{
                            return {
                                user1: g[0],
                                user1data: usersJSON.find(u=>u.id===g[0]),
                                user2data: usersJSON.find(u=>u.id===g[1]),
                                user2: g[1]
                            }
                        }) : null
                    }
                })
            })
        };

        return rounds;
    }

    const toJSONText = () => {
        let jsonGames = []

        const rounds = generator();

        rounds.forEach(round=>{
            round.matches.forEach(ms=>{
                ms.matches && ms.matches.forEach(m=>{
                        jsonGames.push({
                            "user1": m.user1,
                            "user2": m.user2,
                            "result1": null,
                            "result2": null,
                            "result3": null,
                            "result4": null,
                            "result5": null,
                            "stage": "group",
                            "round": round.round,
                            "datetime": null
                        });
                    }
                )
            })

        })

        return JSON.stringify(jsonGames);
    }

    return (
        <Segment style={{fontSize: "30px", lineHeight: '50px'}}>
            {
                generator().map(r=>(
                    <div>
                        <div>Тур {r.round}</div>
                        {
                            r.matches.map(ms=>(
                                ms.matches && <div>
                                    <div>Группа {ms.group}</div>
                                    <div>
                                        {
                                            ms.matches.map(m=>(
                                                <div>
                                                    {`${m.user1data.user} @${m.user1} VS ${m.user2data.user} @${m.user2}`}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
            {
                <code style={{fontSize: "14px", lineHeight: '5px'}}>{toJSONText()}</code>
            }
        </Segment>
    )
}
export default RRobin;