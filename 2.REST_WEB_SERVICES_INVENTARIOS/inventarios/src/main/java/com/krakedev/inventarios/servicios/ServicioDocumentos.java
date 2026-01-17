package com.krakedev.inventarios.servicios;
import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.documentosBDD;
import com.krakedev.inventarios.entidades.documentos;
import com.krakedev.inventarios.excepciones.KrakeDevException;
@Path("tiposDocumento")
public class ServicioDocumentos {
	@Path("recuperar")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(){
		documentosBDD documentos = new documentosBDD();
		ArrayList<documentos> doc=null;;
		try {
			doc = documentos.buscar();
			return Response.ok(doc).build();
		} catch (KrakeDevException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
