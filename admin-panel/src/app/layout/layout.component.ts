import { Component, inject, signal, viewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);
  drawer = viewChild(MatSidenav);

  /** En pantallas pequeñas el menú se muestra en modo "over" y se puede cerrar. */
  isHandset = toSignal(
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      shareReplay(1)
    ),
    { initialValue: false }
  );

  menuAbierto = signal(false);

  toggleMenu(): void {
    this.drawer()?.toggle();
    this.menuAbierto.update(v => !v);
  }

  cerrarSiHandset(): void {
    if (this.isHandset()) {
      this.drawer()?.close();
    }
  }
}
