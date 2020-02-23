import React from 'react';
import { AlertStateInterface } from '../../interfaces';
import { CSSTransition } from 'react-transition-group';

import './Alert.scss';

const Alert = ({ message, type }: AlertStateInterface) => {

    return (
        <CSSTransition
            in={!!message}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit>
            <div className={`alert alert-${type || 'warning'} `}>
                <strong>{message}</strong>
            </div>
        </CSSTransition>
    );
};

export default Alert;