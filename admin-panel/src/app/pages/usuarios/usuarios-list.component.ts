import { Component, inject } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from './usuarios.model';
import { ConfirmDialogComponent, ConfirmDialogData } from './confirm-dialog/confirm-dialog.component';

const USUARIOS_FICTICIOS: Usuario[] = [
  { id: 1, nombre: 'Ana García', email: 'ana.garcia@ejemplo.com', rol: 'Administrador', fechaRegistro: '2024-01-15' },
  { id: 2, nombre: 'Luis Martínez', email: 'luis.m@ejemplo.com', rol: 'Editor', fechaRegistro: '2024-02-20' },
  { id: 3, nombre: 'María López', email: 'maria.lopez@ejemplo.com', rol: 'Visor', fechaRegistro: '2024-03-10' },
  { id: 4, nombre: 'Carlos Ruiz', email: 'carlos.ruiz@ejemplo.com', rol: 'Editor', fechaRegistro: '2024-04-05' },
  { id: 5, nombre: 'Elena Torres', email: 'elena.t@ejemplo.com', rol: 'Administrador', fechaRegistro: '2024-05-12' }
];

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.scss'
})
export class UsuariosListComponent {
  private dialog = inject(MatDialog);

  displayedColumns: string[] = ['nombre', 'email', 'rol', 'fechaRegistro', 'acciones'];
  dataSource = new MatTableDataSource<Usuario>(USUARIOS_FICTICIOS);

  verDetalles(usuario: Usuario): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        titulo: 'Detalles del usuario',
        mensaje: '',
        tipo: 'detalle',
        usuario: {
          nombre: usuario.nombre,
          email: usuario.email,
          rol: usuario.rol,
          fechaRegistro: usuario.fechaRegistro
        }
      } as ConfirmDialogData
    });
  }

  eliminar(usuario: Usuario): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      width: '380px',
      data: {
        titulo: 'Confirmar eliminación',
        mensaje: `¿Está seguro de eliminar a "${usuario.nombre}"? Esta acción no se puede deshacer.`,
        tipo: 'eliminar'
      } as ConfirmDialogData
    });

    ref.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.dataSource.data = this.dataSource.data.filter(u => u.id !== usuario.id);
      }
    });
  }
}
