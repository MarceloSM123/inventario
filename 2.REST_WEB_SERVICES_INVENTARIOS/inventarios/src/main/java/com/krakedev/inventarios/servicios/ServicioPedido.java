package com.krakedev.inventarios.servicios;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.PedidosBDD;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.excepciones.KrakeDevException;
@Path("pedidos")	
public class ServicioPedido {
	@Path("registrar")	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Pedido pedido){
		PedidosBDD PedidoBDD = new PedidosBDD();
		try {
			PedidoBDD.insertar(pedido);
			return Response.ok().build();
		} catch (KrakeDevException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return Response.serverError().build();
		}
	
	
}
}
