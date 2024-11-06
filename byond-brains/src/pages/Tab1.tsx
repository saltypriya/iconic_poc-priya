import { IonAccordion, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import SideMenu from '../components/SideMenu';
import NavBar from '../components/NavBar';
import SlideShow from '../components/SlideShow';
import Footer from '../components/Footer';
const Tab1: React.FC = () => {
  return (
    <>
    <IonPage id='main-content'>
      <NavBar></NavBar>
      <IonContent fullscreen>
        <SlideShow />
        <div className='container'>
          <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          </IonCard>
          <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          </IonCard>
          <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          </IonCard>
          <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          </IonCard>
          <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          </IonCard>
          <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          </IonCard>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
    </>
  );
};

export default Tab1;
