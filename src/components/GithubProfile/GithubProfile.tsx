import React from 'react';
import { GithubUser } from '../../models/githubUser.interface';
import { IonGrid, IonCol, IonRow } from '@ionic/react';

import './GithubProfile.css'

const GithubProfile: React.FC<GithubUser> = ({...user}) => {

    return (
    <IonGrid>
        <IonRow>
            <IonCol>
                <img alt="foto_perfil" src={user.avatar_url} />
            </IonCol>
            <IonCol className="v-wrap">
                {user.name}
            </IonCol>
        </IonRow>
    </IonGrid>
    )   
}

export default GithubProfile;