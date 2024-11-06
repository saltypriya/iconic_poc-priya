import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import SideMenu from '../components/SideMenu';
import NavBar from '../components/NavBar';
const Tab3: React.FC = () => {
  return (
    <>
    <IonPage>
      <NavBar></NavBar>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab3;
