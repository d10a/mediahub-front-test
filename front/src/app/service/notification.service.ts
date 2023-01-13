import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  message: string = '';
  private timetout: any;

  constructor() { }

  add(message: string) {
    this.message = message;
    this.timetout = setTimeout(() => {
      this.clear()
    }, 4000);
  }

  clear() {
    this.message = '';
    clearTimeout(this.timetout);
  }

  hasMessage(): boolean {
    return (this.message !== '')
  }
}
