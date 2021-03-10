import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Footer = (props) => {
    const initData = {
        activeLink: 'all'
    };

    const [activeLink, setActiveLink] = useState(initData.activeLink);
    const onClickSetActive = item => setActiveLink(item.id);

    const filters = [
        {
          id: 'incompleted',
          name: 'Незавершенные',
          count: props.items.filter(item => !item.isDone).length
        },
        {
          id: 'completed',
          name: 'Завершенные',
          count:  props.items.filter(item => item.isDone).length
        },
        {
          id: 'all',
          name: 'Все',
          count: props.count
        }
      ];
        return (<ul className={props.classes['filters-list']}>
        {filters
          .filter(item => item)
          .map(item => (
            <li key={item.id}>
              <button
              className={classnames({
                [props.classes.button]: true,
                [props.classes.active]: (item.id === activeLink)
              })}
              onClick={() => onClickSetActive(item)}
              >
                {item.name + ' '}
                <span className={props.classes.number}>{item.count}</span>
              </button>
            </li>
          ))}
      </ul>)
}
Footer.defaultProps = {
    count: 0
}

export { Footer };