import { Component, OnInit } from '@angular/core';
import { MysqlService } from './mysql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datos: any[] = [];

  constructor(private mysqlService: MysqlService) { }

  ngOnInit(): void {
    const sql = 'SELECT * FROM mi_tabla'; // Reemplaza con tu consulta SQL
    this.mysqlService.query(sql).subscribe(
      (results) => {
        this.datos = results;
      },
      (error) => {
        console.error('Error al obtener datos de MySQL:', error);
      }
    );
  }
}