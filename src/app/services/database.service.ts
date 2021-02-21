import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private database: AngularFirestore) { }

  public setEvent(event: any): Promise<void> {
    if (!event.id) { event.id = this.getId(); }
    return this.database.collection('events').doc(event.id).set(event);
  }

  public getEvents(): Observable<any[]> {
    const eventsC: any[] = [];
    const registers: any[] = [];
    return this.database.collection('events').snapshotChanges().pipe(
      map( (docs: any) => {
        docs.map( (doc: any) => {
          const event = doc.payload.doc.data();
          const eventCalendar = {
            title: event.firstName,
            date: event.date + 'T' + event.time,
            id: event.id
          };
          eventsC.push(eventCalendar);
          registers.push(event);
        });
        console.log(registers);
        sessionStorage.setItem('events', JSON.stringify(registers));
        return eventsC;
      })
    );
  }

  public setUser(user: any): Promise<void> {
    return this.database.collection('users').doc(user.id).set(user);
  }

  public getUser(userId: string): Promise<any> {
    return this.database.collection('users').doc(userId).valueChanges().pipe(first()).toPromise();
  }

  private getId(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
