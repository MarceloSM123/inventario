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

public class ProveedoresBDD {
	public ArrayList<Proveedor> buscar(String subcadena) throws KrakeDevException{
		ArrayList<Proveedor> Proveedores =new ArrayList();
		Connection con=null;
		ResultSet rs=null;
		Proveedor Proveedor=null;
		try {
			con=ConexionBDD.obtenerConexion();
			PreparedStatement ps=
					con.prepareStatement("select prov.identificador_proveedores,prov.tipo_documento,td.descripcion ,prov.nombre,prov.telefono,prov.correo,prov.direccion from proveedores prov, tipo_documentos td "
							+ "where prov.tipo_documento=td.codigo_tipo_documentos "+"  and upper(prov.nombre) like ?");
			ps.setString(1, "%"+subcadena.toUpperCase()+"%");
			rs=ps.executeQuery();
			
			while(rs.next()) {
				//nombre,telefono,correo,direccion from proveedores
				String identificador_proveedores = rs.getString("identificador_proveedores");
				String tipo_documento = rs.getString("tipo_documento");
				String descripcion = rs.getString("descripcion");
				String nombre = rs.getString("nombre");
				String telefono = rs.getString("telefono");
				String correo = rs.getString("correo");
				String direccion = rs.getString("direccion");
				documentos t_documento =new documentos(tipo_documento,descripcion);
				Proveedor = new Proveedor(identificador_proveedores,t_documento,nombre,telefono,correo,direccion);
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
