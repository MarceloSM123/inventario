package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakdev.inventarios.utils.ConexionBDD;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.entidades.documentos;
import com.krakedev.inventarios.excepciones.KrakeDevException;

public class documentosBDD {
	public ArrayList<documentos> buscar() throws KrakeDevException{
		ArrayList<documentos> Documentos =new ArrayList();
		Connection con=null;
		ResultSet rs=null;
		documentos documentos=null;
		try {
			con=ConexionBDD.obtenerConexion();
			PreparedStatement ps=
					con.prepareStatement("select codigo_tipo_documentos, descripcion from tipo_documentos ");
			rs=ps.executeQuery();
			
			while(rs.next()) {
				//nombre,telefono,correo,direccion from proveedores
				String codigo_tipo_documentos = rs.getString("codigo_tipo_documentos");
				String descripcion = rs.getString("descripcion");
				
				documentos = new documentos(codigo_tipo_documentos,descripcion);
				Documentos.add(documentos);
			}
		} catch (KrakeDevException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle: "+e.getMessage());
		}
		
		return Documentos;
	}
}
