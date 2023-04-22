import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  urlBase = 'https://api.themoviedb.org/3/';
  key = 'f20ee710740d29008a6a75c5bddbe9bc';

  genereteUrl = ( _type: string ) => this.urlBase + `movie/${_type}?api_key=`+this.key;

  constructor(private http:HttpClient) { }

  getPeliculas():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    //https://api.themoviedb.org/3/collection/{collection_id}?api_key=f20ee710740d29008a6a75c5bddbe9bc&language=en-US
    https://api.themoviedb.org/3/genre/movie/list?api_key=f20ee710740d29008a6a75c5bddbe9bc
    //return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=f20ee710740d29008a6a75c5bddbe9bc',{headers:headers})
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=f20ee710740d29008a6a75c5bddbe9bc',{headers:headers})
    
    //return this.http.get('https://api.themoviedb.org/3/movie/502356/images?api_key=f20ee710740d29008a6a75c5bddbe9bc&language=en-US',{headers:headers})
  }


  getMovies( type: string ){
console.log('Buscando Pelicula',this.genereteUrl)


let headers = new HttpHeaders().set('Content-Type','application/json');
   // return this.http.get(this.url + 'listar_productos_nuevos_publico',{headers:headers});
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=f20ee710740d29008a6a75c5bddbe9bc',{headers:headers})
  }

  getMovie(id:any){
    console.log('Buscando pelicula con id:',id)
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=f20ee710740d29008a6a75c5bddbe9bc&language=en-US')
  }

}
