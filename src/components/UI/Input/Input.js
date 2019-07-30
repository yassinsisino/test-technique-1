import React from 'react';
import Classes from './Input.module.css';

const input = (props) =>  {
    const { label, error } = props;
    return (
        <div className={Classes.Input }>
        <label className={Classes.Label}>
          {label}
        </label>
        <input className={Classes.InputElement} {...props} />
        {error &&
            <small className={Classes.Error}>{error}</small>
        }
      </div>
    )
}

export default input;