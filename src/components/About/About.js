import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const About = () => {
    const initData = {
        isLoading: true,
        reposList: []
    };
    const [isLoading, setIsLoading] = useState(initData.isLoading);
    const [reposList, setReposList] = useState(initData.reposList);
      
    useEffect(()=>{
            octokit.repos.listForUser({
                username: 'ALCHIK'
            }).then(data=>{
                let wrapped_data = data.data;
                setIsLoading(false);
                setReposList(wrapped_data);
            })
            console.log(reposList)
    },[isLoading,reposList]) // пробовала оставлять пустым

    useEffect(() => { 
        console.log('update')
      });


    useEffect(() => {
        return () => {
          console.log('will unmount');
        }
      }, []);

      
    return (
        <CardContent> <h1>{isLoading ? <CircularProgress /> : 'Обо мне'}</h1>
        
        </CardContent>
    );

}

export { About };