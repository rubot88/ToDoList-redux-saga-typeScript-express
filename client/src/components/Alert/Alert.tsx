import React from 'react';
import { AlertInterface } from '../../interfaces';
import { CSSTransition } from 'react-transition-group';

import './Alert.scss';

const Alert = ({ message, type }: AlertInterface) => {

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
                <strong className="mr-1">Warning!</strong>
                {message}
            </div>
        </CSSTransition>
    );
};

export default Alert;