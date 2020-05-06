import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { GithubUser } from '../../models/githubUser.interface';
import GithubProfile from '../../components/GithubProfile/GithubProfile';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonInput,
  IonList,
  IonItem
} from '@ionic/react';

import './Github.css';
import { IGithubRepo } from '../../models/githubRepo.interface';
import GithubRepoItem from '../../components/GithubRepoItem/GithubRepoItem';

const Github: React.FC = () => {

  const [ text, setText ] = useState<string>("");
  const [ user, setUser ] = useState<GithubUser>();
  const [ repos, setRepos ] = useState<IGithubRepo[]>();


  useEffect(() => {
    async function loadRepos(): Promise<void> {
      if(user){
        try{
          const repos: IGithubRepo[] = (await api.get(`/users/${user.login}/repos`)).data;
          if(repos){
            setRepos(repos)
          }
        }
        catch(err){
          console.log(err)
        }
      }
    }
    loadRepos()
  }, [user])

  async function search(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    try{
      const user: GithubUser = (await api.get(`/users/${text}`)).data;
      if(user){
        setUser(user);
      }
    }
    catch(err){
      console.log(err)
    }
  }

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil Github</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={(e) => search(e)}>
          <IonInput value={text} placeholder="Github username" onIonChange={e => setText(e.detail.value!)} clearInput required></IonInput>
        </form>
        <IonList>
          <IonItem>
            { user && <GithubProfile {...user} /> }
          </IonItem>

          {repos && repos.map( repo => (
            <GithubRepoItem key={repo.id} {...repo }/>
          ))}

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Github;
