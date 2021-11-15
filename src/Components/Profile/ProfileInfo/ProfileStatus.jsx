import React, {useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return <div>
        {!editMode ?
            <span title={'Double click to change status...'}
                  onDoubleClick={activateEditMode}>{props.status ? props.status : 'no status'}</span> :
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text"
                       value={status}/>
                <button type='submit'>
                    Save
                </button>
            </div>}
    </div>
}

export default ProfileStatus