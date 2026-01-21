package com.krakedev.inventarios.entidades;

import java.util.ArrayList;
import java.util.Date;

public class CabeceraVentas {
	private int codigo_cabecera_ventas;
	private Date fecha;
	private double total_sin_iva;
	private double iva;
	private double total;
	
	private ArrayList<DetalleVentas> detalles; 
	
	public CabeceraVentas() {
		super();
	}

	public CabeceraVentas(int codigo_cabecera_ventas, Date fecha, double total_sin_iva, double iva, double total,
			ArrayList<DetalleVentas> detalles) {
		super();
		this.codigo_cabecera_ventas = codigo_cabecera_ventas;
		this.fecha = fecha;
		this.total_sin_iva = total_sin_iva;
		this.iva = iva;
		this.total = total;
		this.detalles = detalles;
	}

	public int getCodigo_cabecera_ventas() {
		return codigo_cabecera_ventas;
	}

	public void setCodigo_cabecera_ventas(int codigo_cabecera_ventas) {
		this.codigo_cabecera_ventas = codigo_cabecera_ventas;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public double getTotal_sin_iva() {
		return total_sin_iva;
	}

	public void setTotal_sin_iva(double total_sin_iva) {
		this.total_sin_iva = total_sin_iva;
	}

	public double getIva() {
		return iva;
	}

	public void setIva(double iva) {
		this.iva = iva;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public ArrayList<DetalleVentas> getDetalles() {
		return detalles;
	}

	public void setDetalles(ArrayList<DetalleVentas> detalles) {
		this.detalles = detalles;
	}

	@Override
	public String toString() {
		return "CabeceraVentas [codigo_cabecera_ventas=" + codigo_cabecera_ventas + ", fecha=" + fecha
				+ ", total_sin_iva=" + total_sin_iva + ", iva=" + iva + ", total=" + total + ", detalles=" + detalles
				+ "]";
	}

	
}
