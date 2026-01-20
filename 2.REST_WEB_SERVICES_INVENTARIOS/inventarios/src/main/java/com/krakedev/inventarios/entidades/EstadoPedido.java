package com.krakedev.inventarios.entidades;

public class EstadoPedido {
	private String codigoEstadosPedido;
	private String descripcion;
	
	public EstadoPedido() {
		super();
	}

	public EstadoPedido(String codigoEstadosPedido, String descripcion) {
		super();
		this.codigoEstadosPedido = codigoEstadosPedido;
		this.descripcion = descripcion;
	}

	public String getCodigoEstadosPedido() {
		return codigoEstadosPedido;
	}

	public void setCodigoEstadosPedido(String codigoEstadosPedido) {
		this.codigoEstadosPedido = codigoEstadosPedido;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
	
}
