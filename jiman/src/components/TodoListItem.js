import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
import './TodoListItem.scss';
const TodoListItem = ({todo}) => {
    const {text, checked} = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkBox', {checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
                
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default TodoListItem;