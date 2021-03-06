import React, { useState, useEffect } from 'react';
import { InputItem } from '../InputItem/InputItem';
import { ItemList } from '../ItemList/ItemList';
import { Footer } from '../Footer/Footer';
import  styles from './ToDo.module.css';
import classnames from 'classnames';

const ToDo = () => {
    const initData = {
        Itemslist: [] ,
          count: 0,
          activeLink: 'all',
          fixitem: false
    };
    
    const Data = localStorage.getItem('Itemslist')
    const [Itemslist, setItemslist] = useState(Data?JSON.parse(Data):initData.Itemslist);
    const [count, setCount] = useState(initData.count);
    const [activeLink, setActiveLink] = useState(initData.activeLink);
    const [fixitem, setFixItem] = useState(initData.fixitem);
    const onClickSetActive = item => setActiveLink(item.id);

    const filters = [
        {
          id: 'incompleted',
          name: 'Незавершенные',
          count: Itemslist.filter(item => !item.isDone).length
        },
        {
          id: 'completed',
          name: 'Завершенные',
          count:  Itemslist.filter(item => item.isDone).length
        },
        {
          id: 'all',
          name: 'Все',
          count: count
        }
      ];
    
    useEffect(() => {
        console.log("App component componentDidMount");
        localStorage.setItem('Itemslist', JSON.stringify(Itemslist));
    }, [Itemslist]);
    
    useEffect(()=>{
        console.log("App component componentDidUpdate");
    });
    
    const onButtonHandler = (id) => {
        const newItemsList = Itemslist.map(item=>{
            const newItem = { ...item }
            if (item.id === id) {
            newItem.isDone = !item.isDone;
            }

            return newItem;

        });
        setItemslist(newItemsList)
        console.log("press=",id)
    
    };
    
    const onDeleteHandler = (id) => {
        const newItemsList = Itemslist.filter(item => {
            return item.id !== id
        })
        setItemslist(newItemsList);
        setCount(newItemsList.length);
    };
    
    const onAddHandler = (value) => {
        const newItem = {
            Itemslist: [
            ...Itemslist,
            {
                id: count+1,
                value,
                isDone: false
            },
            ],
            count: count + 1
        }
        setItemslist(newItem.Itemslist);
        setCount(newItem.count);
    };

    const onDoublenHandler = (value) => {
      let item = Itemslist.find(item => {
        if (item.id == value) {
          console.log(value, item)
          return item.value;
        }
        
      })
      console.log(item.value)
      return item.value
    };

    const onItemFixHandler = (id, newValue) => {
      const newItem = {
        Itemslist: [
        ...Itemslist,
        ],
      }
      newItem.Itemslist.map(item => {if (item.id == id) { item.value = newValue }})
      setItemslist(newItem.Itemslist);
      console.log(Itemslist)
    }
      
    return (
        <section className={styles.todo}>
            <div className={styles.header}>
                <h1 className={styles.heading}>Список моих дел</h1>
                <ul className={styles['filters-list']}>
        {filters
          .filter(item => item)
          .map(item => (
            <li key={item.id}>
              <button
              className={classnames({
                [styles.button]: true,
                [styles.active]: (item.id === activeLink)
              })}
              onClick={() => onClickSetActive(item)}
              >
                {item.name + ' '}
                <span className={styles.number}>{item.count}</span>
              </button>
            </li>
          ))}
      </ul>
                
            </div>
            <ItemList 
            items={Itemslist} 
            onButtonHandler={onButtonHandler}
            onDeleteHandler={onDeleteHandler}
            onDoublenHandler={onDoublenHandler}
            onItemFixHandler={onItemFixHandler}
            activeLink={activeLink}
            />
            <InputItem 
            onAddHandler = {onAddHandler} />
            
        </section>
    );
};

export { ToDo };
