package programa;

import java.util.ArrayList;
import java.util.Scanner;

public class Menu {
    public static void buscarItem(){
        Scanner teclado = new Scanner(System.in);
        String pieza;
        ArrayList<Pieza> arrayPiezas = new ArrayList();

        // Mostramos encabezado
        System.out.println("//// BUSQUEDA DE PIEZA ////");

        // Pedimos codigo de pieza
        System.out.println("Introduzca el numero de la pieza:");
        pieza = teclado.nextLine();

        // Creo objeto pieza para trabajar con el
        Pieza pieza1 = new Pieza();

        // Creo piezas
        Pieza l1 = new Pieza("502.261.91","GODMORGON armario","roble tinte blanco",130,20);
        Pieza l2 = new Pieza("702.231.39","GODMORGON armario","alto brillo gris",190,3);
        Pieza b1 = new Pieza("402.414.51","MOLGER banco","abedul",29.99,10);
        Pieza b2 = new Pieza("602.414.50","MOLGER banco","Marron oscuro",29.99,10);

        // Agrego piezas a lista
        arrayPiezas.add(l1);
        arrayPiezas.add(l2);
        arrayPiezas.add(b1);
        arrayPiezas.add(b2);

        // Muestro información del producto
        System.out.println("==== PIEZA ====");

        for (int i = 0; i < arrayPiezas.size(); i++){
            if (arrayPiezas.get(i).getCodPieza().equals(pieza)){
                System.out.println("COD PIEZA: " + arrayPiezas.get(i).getCodPieza());
                System.out.println("NOM PIEZA: " + arrayPiezas.get(i).getNomPieza());
                System.out.println("DES PIEZA: " + arrayPiezas.get(i).getDesPieza());
                System.out.println("PRECIO PIEZA: " + arrayPiezas.get(i).getPrecio());
                System.out.println("STOCK PIEZA: " + arrayPiezas.get(i).getStock());
                System.out.println("-----------------------");
            }
        }
    }

    public static ArrayList agregarItem(){
        Scanner teclado = new Scanner(System.in);
        String pieza;
        ArrayList<Pieza> arrayPiezas = new ArrayList();
        ArrayList<Pieza> carro = new ArrayList();
        boolean salir = true;

        do {
            // Mostramos encabezado
            System.out.println("//// COMPRA DE PIEZAS ////");

            // Mostramos articulos en el carro
            if (carro.size() > 0){
                for (int i = 0; i < carro.size(); i++){
                    System.out.println("COD PIEZA: " + carro.get(i).getCodPieza());
                    System.out.println("NOM PIEZA: " + carro.get(i).getNomPieza());
                    System.out.println("DES PIEZA: " + carro.get(i).getDesPieza());
                    System.out.println("PRECIO PIEZA: " + carro.get(i).getPrecio());
                    System.out.println("STOCK PIEZA: " + carro.get(i).getStock());
                }
            } else {
                System.out.println("El carro está vacio");
            }


            // Pedimos codigo de pieza
            System.out.println("Si desea salir, pulse 0");
            System.out.println("Introduzca el numero de la pieza que desee comprar:");
            pieza = teclado.nextLine();

            // Creo objeto pieza para trabajar con el
            Pieza p1 = new Pieza();

            // Creo piezas
            Pieza l1 = new Pieza("502.261.91","GODMORGON armario","roble tinte blanco",130,20);
            Pieza l2 = new Pieza("702.231.39","GODMORGON armario","alto brillo gris",190,3);
            Pieza b1 = new Pieza("402.414.51","MOLGER banco","abedul",29.99,10);
            Pieza b2 = new Pieza("602.414.50","MOLGER banco","Marron oscuro",29.99,10);

            // Agrego piezas a lista
            arrayPiezas.add(l1);
            arrayPiezas.add(l2);
            arrayPiezas.add(b1);
            arrayPiezas.add(b2);

            // Agrego al carro
            for (int i = 0; i < arrayPiezas.size(); i++){
                if (arrayPiezas.get(i).getCodPieza().equals(pieza)){
                    carro.add(new Pieza(arrayPiezas.get(i).getCodPieza(),arrayPiezas.get(i).getNomPieza(),arrayPiezas.get(i).getDesPieza(),
                            arrayPiezas.get(i).getPrecio(),arrayPiezas.get(i).getStock()));
                }
            }

            if (pieza.equals("0")){
                salir = false;
            }

        } while (salir);

        return carro;

    }

    public static void vaciarCarro(ArrayList carro){
        ArrayList arrayCarro = new ArrayList();

        // Igualo la lista existente con una nueva
        carro = arrayCarro;

        // En caso de borrado, lo indico
        if (carro.size() == 0){
            System.out.println("Carro vaciado correctamente");
        } else {
            // Si no posible, lo indico
            System.out.println("El carro contiene objetos no posibles de eliminar");
        }
    }
}
