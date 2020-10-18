import React, { useState, useEffect } from 'react';
import { InputItem } from '../InputItem/InputItem';
import { ItemList } from '../ItemList/ItemList';
import { Footer } from '../Footer/Footer';
import  styles from '../../App.module.css';

const ToDo = () => {
    const initData = {
        Itemslist: [
          {
            id: 1,
            value: 'первое - проснуться пораньше',
            isDone: false
          },
          {
            id: 2,
            value:'второе - почитать',
            isDone: true
          },
          {
            id:3,
            value: 'третье - погулять',
            isDone: false
          }],
          count: 6
      };
    
    const [Itemslist, setItemslist] = useState(initData.Itemslist);
    const [count, setCount] = useState(initData.count);
    
    useEffect(() => {
        console.log("App component componentDidMount");
    }, []);
    
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
        setCount(Itemslist.length);
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
      
    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>Важные дела</h1>
            <InputItem 
            onAddHandler = {onAddHandler} />
            <ItemList 
            items={Itemslist} 
            onButtonHandler={onButtonHandler}
            onDeleteHandler={onDeleteHandler}
            />
            <Footer 
            classes={styles} 
            count={Itemslist.length}/>
        </div>
    );
};

export { ToDo };
