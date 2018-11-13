import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {getAuthentication} from '../modules/auth/Actions';
import {YANDEX_TOKEN} from '../../helpers/constants';
import {GetFromHash} from '../../helpers/utils/GetFromHash';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yandexToken: null
        }
    }


    componentDidMount() {
        const hash = this.props.location.hash;
        const token = sessionStorage.getItem(YANDEX_TOKEN);
        if (token) {
            this.props.history.push(`/files`);
        } else if (hash) {
            const token = GetFromHash(hash, 'access_token');
            sessionStorage.setItem(YANDEX_TOKEN, token);
            this.setState({
                yandexToken: token
            });
            this.props.history.push(`/files`);
        } else {
            this.props.dispatch(getAuthentication())
        }
    }

    render() {
        const { yandexToken } = this.state;
        return (
            <div>
                {yandexToken ? <Link to={`/files/${yandexToken}`}>Go to files</Link> : 'Please login to Yandex'}
            </div>
        );
    }
}

export default connect()(Home);
