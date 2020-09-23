import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from '@octokit/rest';

import  styles from '../../App.module.css';

const octokit = new Octokit();

/*class About extends React.Component {
    state = {
        isLoading: true,
        reposList: [],
        login: 'ALCHIK',
        error: '',
        name: ''
    }

    componentDidMount() {
        console.log("About componentDidMount")

        octokit.repos.listForUser({
            username: this.state.login
        }).then(response => {
            this.setState({isLoading: false, reposList: response.data});
            console.log(this.state.reposList)
        }).catch(err => {
            this.setState({isLoading: false, error: err});
        });

        octokit.users.getByUsername({
            username: this.state.login,
        })
        .then((response) => {
            this.setState({
                avatarURL: response.data.avatar_url,
                name: response.data.name,
            });
        });
    }

    render() {
        const {isLoading, reposList, login, name , avatarURL, error } = this.state;
        return (<CardContent>
                <h1>{isLoading ? <CircularProgress /> : 'Обо мне'}</h1>
                 <div>
                     <span>My name is: { name ? name: login }</span>
                     <div><img src={avatarURL} className={styles.image} /></div>
                </div>
        { !isLoading && error ? <span>{error}</span> : <ol>
                    { reposList.map((item) =>  (<li key={item.id}><a href={item.html_url} target="_blank">{item.name}</a></li>) )}
                    </ol>
                    }
            </CardContent>
        )
    }
}*/

const About = () => {
    const login = 'ALCHIK'
    const initData = {
        isLoading: true,
        reposList: [],
        error: '',
        name: '',
        avatarURL: ''
    };
    const [isLoading, setIsLoading] = useState(initData.isLoading);
    const [reposList, setReposList] = useState(initData.reposList);
    const [error, setError] = useState(initData.error);
    const [name, setName] = useState(initData.name);
    const [avatarURL, setURL] = useState(initData.avatarURL);
      
    useEffect(()=>{
            octokit.repos.listForUser({
                username: login
            }).then(data=>{
                let wrapped_data = data.data;
                setIsLoading(false);
                setReposList(wrapped_data);
            }).catch(err => {
                setError(err);
            });
    },[])

    useEffect(()=>{
        octokit.users.getByUsername({
            username:login
        })
        .then((response) => {
           setName(response.data.name);
           setURL(response.data.avatar_url);
        });
    },[])

    useEffect(() => { 
        console.log('update')
      });


    useEffect(() => {
        return () => {
          console.log('will unmount');
        }
      }, []);

      
    return (<CardContent>
        <h1>{isLoading ? <CircularProgress /> : 'Обо мне'}</h1>
         <div>
             <span>My name is: { name ? name: login }</span>
             <div><img src={avatarURL} className={styles.image} /></div>
        </div>
{ !isLoading && error ? <span>{error}</span> : <ol>
            { reposList.map((item) =>  (<li key={item.id}><a href={item.html_url} target="blank">{item.name}</a></li>) )}
            </ol>
            }
    </CardContent>
)

}

export { About };