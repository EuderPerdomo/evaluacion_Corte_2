import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  type:String=''
  typeSubscription:any;
  movies: Array<object> =[];
  validTypes= ['top_rated', 'popular' , 'upcoming']
  public peliculas : any = {};
  public peli : any = [];
public pelicula:any=[]

  constructor(private route: ActivatedRoute, private api:PeliculasService, private router: Router) { }

  ngOnInit(): void {


    this.api.getMovies('GENERO').subscribe(
      response=>{
        this.peli=response
       console.log('Respuesta obtenida',this.peli)
      }
    );




    this.api.getPeliculas().subscribe(
      response=>{
        this.peliculas = response.results;
        console.log('Estas son las categorias en el index producto ',this.peliculas,response);
        
      }
    )
  }


getMovie(){
  const id=560
  this.api.getMovie(id).subscribe(
    response=>{
      this.pelicula=response
     console.log('Solo pelicula',this.pelicula)
    }
  );
}

}
