import { Component } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) { }
}
