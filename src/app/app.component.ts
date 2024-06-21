import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';
import { AnnouncementDialogComponent } from './components/dialogs/announcement-dialog/announcement-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class AppComponent implements OnInit {
  title = 'FHNHospital';
  currentRoute: string = '';
  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Extract the first segment of the route to check if it's 'main'
        const urlSegment = event.urlAfterRedirects.split('/')[1];
        this.currentRoute = urlSegment;
      }
    });
  }
}
