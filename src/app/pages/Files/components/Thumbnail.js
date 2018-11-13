import * as React from 'react';
import {FOLDER_ICON_SRC, VIDEO_ICON_SRC} from '../../../../helpers/constants';
import {Link} from 'react-router-dom';

export const Thumbnail = (props) => {
    const {file} = props

    if (file.get('media_type') === 'image') {
        return (
            <li>
                <img src={file.get('preview')} alt={file.get('name')}/>
                <p>{file.get('name')}</p>
            </li>
        )
    } else if (file.get('media_type') === 'video') {
        return (
            <li>
                <img src={VIDEO_ICON_SRC} alt={file.get('name')}/>
                <p>{file.get('name')}</p>
            </li>
        )
    } else if (file.get('type') === 'file') {
        return <li>{file.get('name')}</li>
    }
    return (
        <li>
            <Link to={`/files/${file.get('path').replace('disk:/', '')}`}>
                <img src={FOLDER_ICON_SRC} alt={file.get('name')}/>
                <p>{file.get('name')}</p>
            </Link>
        </li>
    )
}