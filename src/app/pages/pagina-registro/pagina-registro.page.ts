import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-registro',
  templateUrl: './pagina-registro.page.html',
  styleUrls: ['./pagina-registro.page.scss'],
})
export class PaginaRegistroPage{
  email: string;
  username: string;
  password: string;

  constructor(private router: Router) {
    this.email = '';
    this.username = '';
    this.password = '';
  }

  registrarse() {
    if (!this.email || !this.username || !this.password) {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    // Verificar Email
    if (!this.validarFormatoEmail(this.email)) {
      console.error('Formato de correo electrónico inválido.');
      return;
    }

    // Verificar contraseña
    if (!this.validarRequisitosContrasena(this.password)) {
      console.error('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Verificar usuario
    if (!this.validarFormatoUsuario(this.username)) {
      console.error('El nombre de usuario debe contener solo letras y tener al menos 3 caracteres.');
      return;
    }

    localStorage.setItem('email', this.email);
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);

    this.router.navigate(['/tabs']);
  }

  private validarFormatoEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validarRequisitosContrasena(password: string): boolean {
    return password.length >= 8;
  }

  private validarFormatoUsuario(username: string): boolean {
    const usernameRegex = /^[a-zA-Z]+$/;
    return usernameRegex.test(username) && username.length >= 3;
  }
}

  
