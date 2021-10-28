import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return <div>
            {!this.state.editMode ?
                <span title={'Double click to change status...'}
                      onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'no status'}</span> :
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text"
                           value={this.state.status}/>
                    <button type='submit'>
                        Save
                    </button>
                </div>}
        </div>
    }

}

export default ProfileStatus