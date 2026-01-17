package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakdev.inventarios.utils.ConexionBDD;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.excepciones.KrakeDevException;

public class ProveedoresBDD {
	public ArrayList<Proveedor> buscar(String subcadena) throws KrakeDevException{
		ArrayList<Proveedor> Proveedores =new ArrayList();
		Connection con=null;
		ResultSet rs=null;
		Proveedor Proveedor=null;
		try {
			con=ConexionBDD.obtenerConexion();
			PreparedStatement ps=
					con.prepareStatement("select identificador_proveedores,tipo_documento,nombre,telefono,correo,direccion from proveedores "
							+ "where upper(nombre) like ?");
			ps.setString(1, "%"+subcadena.toUpperCase()+"%");
			rs=ps.executeQuery();
			
			while(rs.next()) {
				//nombre,telefono,correo,direccion from proveedores
				String identificador_proveedores = rs.getString("identificador_proveedores");
				String tipo_documento = rs.getString("tipo_documento");
				String nombre = rs.getString("nombre");
				String telefono = rs.getString("telefono");
				String correo = rs.getString("correo");
				String direccion = rs.getString("direccion");
				
				Proveedor = new Proveedor(identificador_proveedores,tipo_documento,nombre,telefono,correo,direccion);
				Proveedores.add(Proveedor);
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
		
		return Proveedores;
	}
	
}
