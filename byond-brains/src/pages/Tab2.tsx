import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import SideMenu from '../components/SideMenu';
import NavBar from '../components/NavBar';

const Tab2: React.FC = () => {
  return (
    <>
    <IonPage>
      <NavBar></NavBar>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab2;
