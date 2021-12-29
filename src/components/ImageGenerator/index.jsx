import React, {useEffect} from 'react';
import './style.css';
import domtoimage from 'dom-to-image';
import Match from "./match";
import {Button, Form, Image, Segment} from "semantic-ui-react";
import Logo from "./logo";
import GroupUsers from "./groupUsers";
import AllUsers from "./allUsers";
import FinalGame from "./final";
import Price from "./prices";

const ImageGenerator = ({data, id, type = 'match', isCreate = false}) => {
    function downloadBlob(blob, name = 'file.txt') {
        // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
        const blobUrl = URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement("a");

        // Set link's href to point to the Blob URL
        link.href = blobUrl;
        link.download = name;

        // Append link to the body
        document.body.appendChild(link);

        // Dispatch click event on the link
        // This is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            })
        );

        // Remove link from body
        document.body.removeChild(link);
    }

    const onButtonClick = () => {
        var node = document.getElementById('my-node' + id);
        domtoimage.toBlob(node).then(function (blob) {
            downloadBlob(blob, 'my-node.png');
        });
    }

    const img = () => {
        var node = document.getElementById('my-node' + id);

        domtoimage.toPng(node)
            .then(function (dataUrl) {
                let img = document.createElement('img');
                img.setAttribute('src', dataUrl);
                img.setAttribute('style', 'max-width: 100vw');
                document.getElementById('img-div' + id).appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    useEffect(isCreate ? img : () => null, [data]);

    const image = (type) => {
        switch (type) {
            case 'price':
                return <Price {...data} id={'my-node' + id}/>;
            case 'final':
                return <FinalGame {...data} id={'my-node' + id}/>;
            case 'match':
                return <Match {...data} id={'my-node' + id}/>;
            case 'group_users':
                return <GroupUsers {...data} id={'my-node' + id}/>;
            case 'all_users':
                return <AllUsers {...data} id={'my-node' + id}/>;
            case 'logo':
                return <Logo id={'my-node' + id}/>;
            default:
                return null;
        }
    }

    return (
        <Form>
            {/*<div id={'img-div' + id}/>*/}
            <Segment className='image-generation__image-block'>
                {
                    image(type)
                }
            </Segment>
            {isCreate && <Button style={{margin: "20px"}} color='orange' onClick={onButtonClick}>Сохранить</Button>}
        </Form>

    )
}
export default ImageGenerator;