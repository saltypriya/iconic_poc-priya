import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import NavBar from '../components/NavBar';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-justify-content-center">
        <NavBar />
        <div className="dashboard-container">
          <IonCard className="dashboard-card">
            <IonCardHeader>
              <IonCardTitle>{`Hey ${userName}!`}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {/* This is a simple dashboard card. You can add more components or data here as needed. */}
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
