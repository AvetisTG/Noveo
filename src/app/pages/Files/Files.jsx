import {connect} from 'react-redux';
import * as React from 'react';
import selector from '../../services/selector';
import {getFiles} from '../../modules/files/Actions';
import './Files.css'
import {Thumbnail} from './components/Thumbnail';


class Files extends React.Component {
    componentDidMount() {
        if (this.props.match.params) {
            const {path} = this.props.match.params;
            this.props.dispatch(getFiles(path));
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.path !== prevProps.match.params.path) {
            const {path} = this.props.match.params;
            this.props.dispatch(getFiles(path));
        }
    }

    render() {
        const {
            files,
            filesFetching,
            filesError
        } = this.props;

        const { path } = this.props.match.params;

        if (filesFetching) {
            return <h2>Loading...</h2>
        }

        console.log(this.props.history);

        return (
            <div className='files-wrapper'>
                {path ? <h2 className='back'>{path} <span onClick={() => this.props.history.goBack()}>Go back</span></h2> : <h2>Files</h2>}
                <ul>
                    {files && files.map((file, i) => {
                        return <Thumbnail file={file} key={i}/>
                    })}
                </ul>
                {filesError && <div className='error'>{filesError}</div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => selector(state, ['files']);

export default connect(mapStateToProps)(Files);
