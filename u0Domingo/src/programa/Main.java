package programa;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int opcion;
        boolean salir;

        do {
            // Mostramos menu y seleccionamos opcion
            mostrarMenu();
            System.out.println("Seleccione una opción:");
            opcion = teclado.nextInt();
            salir = seleccionarMenu(opcion);
        } while (salir);
    }

    public static void mostrarMenu(){
        System.out.println("===== IKEA ====");
        System.out.println("Bienvenido al catalogo offline de IKEA.");
        System.out.println("1. Buscar");
        System.out.println("2. Agregar a carro");
        System.out.println("3. Limpiar carro");
        System.out.println("0. Salir");
    }

    public static boolean seleccionarMenu(int opcion){
        ArrayList carro = new ArrayList();
        switch (opcion){
            case 1:
                Menu.buscarItem();
                break;
            case 2:
                carro = Menu.agregarItem();
                break;
            case 3:
                Menu.vaciarCarro(carro);
                break;
            case 0:
                System.out.println("Gracias por su compra");
                return false;
            default:
                System.out.println("Opcion incorrecta");
                break;
        }

        return true;
    }
}
