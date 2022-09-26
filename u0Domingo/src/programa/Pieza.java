package programa;

public class Pieza {
    private String codPieza;
    private String nomPieza;
    private String desPieza;
    private double precio;
    private int stock;

    public Pieza() {
    }

    public Pieza(String codPieza, String nomPieza, String desPieza, double precio, int stock) {
        this.codPieza = codPieza;
        this.nomPieza = nomPieza;
        this.desPieza = desPieza;
        this.precio = precio;
        this.stock = stock;
    }

    public String getCodPieza() {
        return codPieza;
    }

    public void setCodPieza(String codPieza) {
        this.codPieza = codPieza;
    }

    public String getNomPieza() {
        return nomPieza;
    }

    public void setNomPieza(String nomPieza) {
        this.nomPieza = nomPieza;
    }

    public String getDesPieza() {
        return desPieza;
    }

    public void setDesPieza(String desPieza) {
        this.desPieza = desPieza;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    @Override
    public String toString() {
        return "Pieza{" +
                "codPieza='" + codPieza + '\'' +
                ", nomPieza='" + nomPieza + '\'' +
                ", desPieza='" + desPieza + '\'' +
                ", precio=" + precio +
                ", stock=" + stock +
                '}';
    }
}
