import { Injectable } from '@angular/core';
import {Capacitor} from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    constructor() { }
    initPush() {
        if (Capacitor.getPlatform() !== 'web') {
            this.registerPush();
        }
    }
    private registerPush() {
        PushNotifications.requestPermissions().then(permission => {
            console.log('Request permission: ', permission);
            
            if (permission.receive === 'granted') {
                PushNotifications.register();
                console.log('Permission granted');
            }
            else {
                // If permission is not granted
                console.log('Permission not granted');
            }
        });
        PushNotifications.addListener('registration', (token) => {
            console.log(token);
        });
        PushNotifications.addListener('registrationError', (err)=> {
            console.log(err);
        }); 
        PushNotifications.addListener('pushNotificationReceived', (notifications)=> {
            console.log(notifications);
        });
    
    }
}