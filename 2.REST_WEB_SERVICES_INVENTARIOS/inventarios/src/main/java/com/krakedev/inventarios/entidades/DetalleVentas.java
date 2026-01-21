package com.krakedev.inventarios.entidades;

public class DetalleVentas {
private int codigoDetalleVentas;
private int cabeceraVentas;
private Producto producto;
private int cantidad;
private double precioVenta;
private double subtotal;
private double subtotalConIva;

public DetalleVentas() {
	super();
}

public DetalleVentas(int codigoDetalleVentas, int cabeceraVentas, Producto producto, int cantidad, double precioVenta,
		double subtotal, double subtotalConIva) {
	super();
	this.codigoDetalleVentas = codigoDetalleVentas;
	this.cabeceraVentas = cabeceraVentas;
	this.producto = producto;
	this.cantidad = cantidad;
	this.precioVenta = precioVenta;
	this.subtotal = subtotal;
	this.subtotalConIva = subtotalConIva;
}

public int getCodigoDetalleVentas() {
	return codigoDetalleVentas;
}

public void setCodigoDetalleVentas(int codigoDetalleVentas) {
	this.codigoDetalleVentas = codigoDetalleVentas;
}

public int getCabeceraVentas() {
	return cabeceraVentas;
}

public void setCabeceraVentas(int cabeceraVentas) {
	this.cabeceraVentas = cabeceraVentas;
}

public Producto getProducto() {
	return producto;
}

public void setProducto(Producto producto) {
	this.producto = producto;
}

public int getCantidad() {
	return cantidad;
}

public void setCantidad(int cantidad) {
	this.cantidad = cantidad;
}

public double getPrecioVenta() {
	return precioVenta;
}

public void setPrecioVenta(double precioVenta) {
	this.precioVenta = precioVenta;
}

public double getSubtotal() {
	return subtotal;
}

public void setSubtotal(double subtotal) {
	this.subtotal = subtotal;
}

public double getSubtotalConIva() {
	return subtotalConIva;
}

public void setSubtotalConIva(double subtotalConIva) {
	this.subtotalConIva = subtotalConIva;
}



}
