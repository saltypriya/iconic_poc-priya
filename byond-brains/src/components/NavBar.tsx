import "./NavBar.css";
import { IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonButton, IonSearchbar, IonIcon } from '@ionic/react';
import { search } from 'ionicons/icons';
import { useState } from 'react';
import SideMenu from './SideMenu';
function NavBar(){
    const [show, setShow] = useState(false);
    const onShowClick = () =>{
        if(show == true){
            setShow(false);
        }else{
            setShow(true);
        }
    };

    return(
        <>
            <SideMenu />
            <IonHeader>
                <IonToolbar>
                    <div className="disp">
                    <a href="/tab1" className="tittleButton"><img className="icon" src="/src/resources/icon.png" /></a>
                    <IonTitle className="disp">Byond-Brains</IonTitle>
                    </div>
                    <IonButtons slot="end">
                        <IonButton shape='round' fill='outline' onClick={onShowClick}>
                            <IonIcon slot="icon-only" icon={search} ></IonIcon>
                        </IonButton>
                        <IonButton shape="round" fill='outline' href='/register'>Sign-Up</IonButton>
                        <IonButton shape="round" fill='solid' href='/login'>Log-In</IonButton>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
                {show && (<IonToolbar><IonSearchbar animated={true} placeholder='Search' showClearButton='focus' clearIcon='fill'></IonSearchbar></IonToolbar>)}
            </IonHeader>
        </>
    );
}
export default NavBar;