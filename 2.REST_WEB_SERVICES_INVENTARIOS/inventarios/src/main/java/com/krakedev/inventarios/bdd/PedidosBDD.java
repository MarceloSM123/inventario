package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;

import com.krakdev.inventarios.utils.ConexionBDD;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.excepciones.KrakeDevException;

public class PedidosBDD {
	public void insertar(Pedido pedido) throws KrakeDevException{
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rsClave =null;// se crea para recuperar numero_cabecera_pedido serial PRIMARY KEY, de la tabla cabecera_pedido		
		int CodigoCabecera=0;
		Date fechaActual = new Date();
		
		java.sql.Date fechaSQL=new java.sql.Date(fechaActual.getTime());// al 
		try {
			con=ConexionBDD.obtenerConexion();
			ps=
			con.prepareStatement("INSERT INTO cabecera_pedido (proveedor, fecha, estado) VALUES "
					+ "(?, ?, ?)", Statement.RETURN_GENERATED_KEYS);
		//	ps.setInt(1, pedido.getCodigo());  numero_cabecera_pedido
			ps.setInt(1, Integer.parseInt(pedido.getProveedor().getIdentificador()));
			ps.setDate(2, fechaSQL);
			ps.setString(3, "S");
			ps.executeUpdate();
			rsClave=ps.getGeneratedKeys();// recupera la clave autogenerada de la base de datos
			
			if(rsClave.next()) {
				CodigoCabecera=rsClave.getInt(1);
			}
			System.out.println("Codigo Generado: "+CodigoCabecera);
		} catch (KrakeDevException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle: "+e.getMessage());
		}

}
}
