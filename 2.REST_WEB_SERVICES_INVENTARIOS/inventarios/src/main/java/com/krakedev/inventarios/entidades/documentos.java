package com.krakedev.inventarios.entidades;

public class documentos {
private String codigo_tipo_documentos;
private String descripcion;



public documentos() {
	super();
}



public documentos(String codigo_tipo_documentos, String descripcion) {
	super();
	this.codigo_tipo_documentos = codigo_tipo_documentos;
	this.descripcion = descripcion;
}



public String getCodigo_tipo_documentos() {
	return codigo_tipo_documentos;
}



public void setCodigo_tipo_documentos(String codigo_tipo_documentos) {
	this.codigo_tipo_documentos = codigo_tipo_documentos;
}



public String getDescripcion() {
	return descripcion;
}



public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}



}
