
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  public pelicula:any=[]
  public id=''
  public generos:any=[]
  constructor(private route: ActivatedRoute, private api:PeliculasService, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      params=>{
        this.id = params['id'];
      })


    console.log('el id',this.id)
    this.getMovie()
  }

  getMovie(){
    this.api.getMovie(this.id).subscribe(
      response=>{
        this.pelicula=response
       console.log('Solo pelicula',this.pelicula)
      }
    );
  }

  
}
