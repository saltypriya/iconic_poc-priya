import React, { useState } from 'react';
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
import './Register.css';
import NavBar from '../components/NavBar';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Extract name from the email (before the '@' symbol)
    const name = email.split('@')[0];

    try {
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password, name }), // Pass name to the backend
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        history.push('/login');
      } else {
        alert(data.error || 'Registration failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <IonPage>
      <NavBar />
      <IonContent className="auth-page">
        <div className="auth-container">
          <IonIcon icon={mailOutline} className="auth-logo" />
          <h2>Create Account</h2>
          <p>Fill in the details below to create an account.</p>

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

          <IonItem className="input-item">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonInput 
              placeholder="Confirm your password" 
              type="password" 
              value={confirmPassword} 
              onIonChange={e => setConfirmPassword(e.detail.value!)} 
            />
          </IonItem>

          <IonButton expand="block" className="sign-in-button" onClick={handleRegister}>
            Register
          </IonButton>

          <p className="footer-text">
            Already have an account? <Link to="/login" className="register-link">Login</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
