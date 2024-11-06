import { IonAccordion, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonButtons, IonBackButton, IonMenuToggle, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { arrowBackCircleOutline, arrowBackOutline, personCircle } from 'ionicons/icons';

function SideMenu(){
    return(
        <>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButtons>
            <IonMenuToggle>
                  <IonButton>
                    <IonIcon icon={arrowBackCircleOutline}></IonIcon>
                    <IonLabel>Back</IonLabel>
                  </IonButton>
            </IonMenuToggle>
            <IonButton>
              <IonIcon icon={personCircle}></IonIcon>
              <IonLabel>Profile</IonLabel>
            </IonButton>
          </IonButtons>
        </IonContent>
      </IonMenu>
        </>
    );
}

export default SideMenu;