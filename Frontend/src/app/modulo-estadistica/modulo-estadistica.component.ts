import { Component, OnInit } from '@angular/core';
import { Stats } from 'app/stats.model';
import { ModuloAuth } from '../modulo-auth.service';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-modulo-estadistica',
  templateUrl: './modulo-estadistica.component.html',
  styleUrls: ['./modulo-estadistica.component.css']
})

export class ModuloEstadistica implements OnInit {
  estadisticas: Stats;

  constructor(private estadisticasService: StatsService) { }

  ngOnInit(): void {
    this.obtenerEstadisticas();
  }

  obtenerEstadisticas(): void {
    this.estadisticasService.getStats()
      .subscribe((estadisticas: Stats)=> {
        this.estadisticas = estadisticas;
      });
  }
}
