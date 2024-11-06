import { IonFooter, IonToolbar } from "@ionic/react";
import './Footer.css'
export default ()=>{
    return(
    <>
        <IonFooter>
            <IonToolbar class="toolbar">
                <div className="container">
                    <ul className="footerul">
                        <li className='footerli'>About us</li>
                        <li className='footerli'>Contact us</li>
                        <li className='footerli'>Teach on ByondBrains</li>
                        <li className='footerli'>Careers</li>
                        <li className='footerli'>Blogs</li>
                        <li className='footerli'>Help & Support</li>
                        <li className='footerli'>Terms</li>
                        <li className='footerli'>Privacy Policies</li>
                        <li className='footerli'>Cookie Settings</li>
                        <li className='footerli'>Site Map</li>
                        <li className='footerli'>Accessibility Settings</li>
                    </ul>
                    <p className="testimonials">Testimonials: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, corrupti iure sapiente voluptates placeat quis inventore qui possimus. Necessitatibus earum fugit accusantium veritatis, voluptatum amet in doloremque porro consectetur nulla.</p>
                </div>
            </IonToolbar>
        </IonFooter>
    </>
    );
}