import React from 'react';
import classnames from 'classnames';

import  styles from '../../App.module.css';

const Item = ({action, isDone}) => (
<span className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
  })
}>{action}</span>
);

export { Item };