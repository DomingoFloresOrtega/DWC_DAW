'use strict'

// Creo objeto Disco
function Disco(nombreDisco,grupoCantante,anioPublicacion,tipoMusica,localizacion){
    this.nombreDisco = nombreDisco;
    this.grupoCantante = grupoCantante;
    this.anioPublicacion = anioPublicacion;
    this.tipoMusica = tipoMusica;
    this.localizacion = localizacion;
    this.prestado = false;

    // cambiar de estanteria
    this.cambiarDeEstanteria = function(nuevaPosicion){
        this.localizacion = nuevaPosicion;
    }

    // cambiar estado de prestamo
    this.cambiarEstadoPrestado = function(prestado){
        this.prestado = prestado;
    }

    // mostrar informacion del disco
    this.muestraInfoDisco = function (){
        return this.nombreDisco + ', ' + this.grupoCantante + ', ' + this.anioPublicacion + ', ' + this.tipoMusica + ', ' + this.localizacion + ', ' + this.prestado;
    }
}