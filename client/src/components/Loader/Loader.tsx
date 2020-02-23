import React from 'react';

import './Loader.scss';

export const Loader = () =>
    (<div className="d-flex justify-content-center p-5 m-5">
        <div className="spinner-border text-primary " role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    );