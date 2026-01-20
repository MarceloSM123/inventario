package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetallePedido {
	private int coidgo;
	private Pedido cabecera;
	private Producto producto;
	private int cantidadSolicitada;
	private BigDecimal subtotal;
	private int cantidadRecibida;
	
	public DetallePedido() {
		super();
	}

	public DetallePedido(int coidgo, Pedido cabecera, Producto producto, int cantidadSolicitada, BigDecimal subtotal,
			int cantidadRecibida) {
		super();
		this.coidgo = coidgo;
		this.cabecera = cabecera;
		this.producto = producto;
		this.cantidadSolicitada = cantidadSolicitada;
		this.subtotal = subtotal;
		this.cantidadRecibida = cantidadRecibida;
	}

	public int getCoidgo() {
		return coidgo;
	}

	public void setCoidgo(int coidgo) {
		this.coidgo = coidgo;
	}

	public Pedido getCabecera() {
		return cabecera;
	}

	public void setCabecera(Pedido cabecera) {
		this.cabecera = cabecera;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public int getCantidadSolicitada() {
		return cantidadSolicitada;
	}

	public void setCantidadSolicitada(int cantidadSolicitada) {
		this.cantidadSolicitada = cantidadSolicitada;
	}

	public BigDecimal getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}

	public int getCantidadRecibida() {
		return cantidadRecibida;
	}

	public void setCantidadRecibida(int cantidadRecibida) {
		this.cantidadRecibida = cantidadRecibida;
	}

	@Override
	public String toString() {
		return "DetallePedido [coidgo=" + coidgo + ", cabecera=" + cabecera + ", producto=" + producto
				+ ", cantidadSolicitada=" + cantidadSolicitada + ", subtotal=" + subtotal + ", cantidadRecibida="
				+ cantidadRecibida + "]";
	}
	
	
}
