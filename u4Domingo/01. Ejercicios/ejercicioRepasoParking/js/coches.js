'use strict'
function Coche(fabricante,matricula,modelo,color){
    this.fabricante = fabricante;
    this.matricula = matricula;
    this.modelo = modelo;
    this.color = color;

    this.setMatricula = function(matricula){
        this.matricula = matricula;
    }

    this.getMatricula = function(){
        return matricula;
    }

    this.getFabricante = function() {
        return fabricante;
    }

    this.setFabricante = function(fabricante){
        this.fabricante = fabricante;
    }

    this.setModelo = function(modelo){
        this.modelo = modelo;
    }

    this.getModelo() = function(){
        return modelo;
    }

    this.setColor(color) = function(color){
        this.color = color;
    }

    this.getColor = function(){
        return color;
    }

    this.mostrarCoche = function(){
        console.log('Coche (Matricula: ' + matricula + ', Fabricante: ' + fabricante + ', Modelo: ' + modelo + ', Color: ' + color);
    }
}