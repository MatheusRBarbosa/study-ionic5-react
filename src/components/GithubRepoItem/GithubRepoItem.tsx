import React from 'react';

import './GithubRepoItem.css';
import { IGithubRepo } from '../../models/githubRepo.interface';
import { IonItem, IonGrid, IonCol, IonRow } from '@ionic/react';

const GithubRepoItem: React.FC<IGithubRepo> = ({...repo}) => {
    return(
        <IonItem>
            <IonGrid>
                <IonRow>
                    <IonCol className="v-wrap">
                        <label><a href={repo.svn_url}>{repo.name}</a></label>
                    </IonCol>
                    <IonCol>
                        <p>{repo.language}</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonItem>
    )
}

export default GithubRepoItem;
