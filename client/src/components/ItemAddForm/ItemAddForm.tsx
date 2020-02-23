import React from 'react';

import { TodoFormInterface } from '../../interfaces';

import './ItemAddForm.scss';

const ItemAddForm = ({ label, onLabelChange, onSubmit }: TodoFormInterface) => {
    return (
        <form className="item-add-form d-flex pt-4 mb-2"
            onSubmit={e => onSubmit(e)}>
            <input type="text"
                className="form-control mr-1"
                onChange={e => onLabelChange(e)}
                placeholder="What needs to be done?"
                value={label} />
            <button className="btn btn-outline-info btn-block">
                Add item
            </button>
        </form>

    );
};

export default ItemAddForm;