import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import {
  IonContent,
  IonPage,
  IonItem,
  IonInput,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Login successful!');
        // Save the user's name in local storage
        localStorage.setItem('userName', data.user.username.split('@')[0]); // Save the name part of the email
        history.push('/dashboard'); // Redirect to dashboard
      } else {
        alert(data.error || 'Login failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-justify-content-center">
        <NavBar />
        <div className="auth-container">
          <IonIcon icon={mailOutline} className="auth-logo" />
          <h2>Welcome Back</h2>
          <p>Enter your credentials to access your account.</p>

          <IonItem className="input-item">
            <IonIcon icon={mailOutline} slot="start" />
            <IonInput 
              placeholder="Enter your email" 
              type="email" 
              value={email} 
              onIonChange={e => setEmail(e.detail.value!)} 
            />
          </IonItem>

          <IonItem className="input-item">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonInput 
              placeholder="Enter your password" 
              type="password" 
              value={password} 
              onIonChange={e => setPassword(e.detail.value!)} 
            />
          </IonItem>

          <IonButton expand="block" className="sign-in-button" onClick={handleLogin}>
            Sign In
          </IonButton>

          <p className="footer-text">
            Don't have an account? <Link to="/register" className="register-link">Register</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
