package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;

import com.krakdev.inventarios.utils.ConexionBDD;
import com.krakedev.inventarios.entidades.CabeceraVentas;
import com.krakedev.inventarios.entidades.DetallePedido;
import com.krakedev.inventarios.entidades.DetalleVentas;
import com.krakedev.inventarios.excepciones.KrakeDevException;

public class VentasBDD {
	
	public void insertar(CabeceraVentas ventas) throws KrakeDevException{
		Connection con=null;
		
		PreparedStatement ps=null;
		PreparedStatement psDet=null;	
		PreparedStatement psAct=null;
		
		ResultSet rsClave =null;// se crea para recuperar numero_cabecera_pedido serial PRIMARY KEY, de la tabla cabecera_pedido		
		int CodigoCabecera=0;
		Date fechaActual = new Date();
		
		java.sql.Date fechaSQL=new java.sql.Date(fechaActual.getTime());// al 
		try {
			con=ConexionBDD.obtenerConexion();
			ps=
			con.prepareStatement("insert into cabecera_ventas(fecha,total_sin_iva,iva,total) values "
					+ "(?, ?, ?,?)", Statement.RETURN_GENERATED_KEYS);
			/*ps.setDate(1, fechaSQL);
			ps.setDouble(2, ventas.getTotal_sin_iva());
			ps.setDouble(3, ventas.getTotal_sin_iva()*0.12);
			ps.setDouble(4, ventas.getTotal_sin_iva()*1.12);*/
			ps.setDate(1, fechaSQL);
			ps.setDouble(2, 0);
			ps.setDouble(3, 0);
			ps.setDouble(4, 0);
			ps.executeUpdate();
			rsClave=ps.getGeneratedKeys();// recupera la clave autogenerada de la base de datos
			
			if(rsClave.next()) {
				CodigoCabecera=rsClave.getInt(1);
			}
			System.out.println("Codigo Generado: "+CodigoCabecera);
			
			BigDecimal totalSinIva=BigDecimal.ZERO;
			BigDecimal totalConIva=BigDecimal.ZERO;
			BigDecimal total;
			
			ArrayList<DetalleVentas> DetalleVentas=ventas.getDetalles();
			DetalleVentas det;
			for (int i=0; i<DetalleVentas.size();i++) {
				det=DetalleVentas.get(i);
				psDet=con.prepareStatement("insert into detalle_ventas(cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_con_iva) values (?,?,?,?,?,?)");
				psDet.setInt(1, CodigoCabecera);
				psDet.setInt(2, det.getProducto().getCodigo());
				psDet.setInt(3, det.getCantidad());
				psDet.setBigDecimal(4, det.getProducto().getPrecioVenta());//.multiply(BigDecimal.valueOf(det.getCantidadSolicitada())));
				psDet.setBigDecimal(5,det.getProducto().getPrecioVenta().multiply(BigDecimal.valueOf(det.getCantidad())));
				if(det.getProducto().isTieneIva()==true) {
				psDet.setBigDecimal(6,(det.getProducto().getPrecioVenta().multiply(BigDecimal.valueOf(det.getCantidad()))).multiply(BigDecimal.valueOf(1.12)));
				}else {
				psDet.setBigDecimal(6,det.getProducto().getPrecioVenta().multiply(BigDecimal.valueOf(det.getCantidad())));
				}
				
				if(det.getProducto().isTieneIva()==true) {
					totalConIva=totalConIva.add((det.getProducto().getPrecioVenta().multiply(BigDecimal.valueOf(det.getCantidad()))).multiply(BigDecimal.valueOf(1.12)));
					}else {
						totalSinIva=totalSinIva.add(det.getProducto().getPrecioVenta().multiply(BigDecimal.valueOf(det.getCantidad())));
					}
				total=totalSinIva.add(totalConIva);
				
				psDet.executeUpdate();
				
				/*if(det.getProducto().isTieneIva()==true) {
					totalConIva=totalConIva.add((det.getProducto().getPrecioVenta().multiply(BigDecimal.valueOf(det.getCantidad()))).multiply(BigDecimal.valueOf(1.12)));
					}else {
						totalSinIva=totalSinIva.add(det.getProducto().getPrecioVenta().multiply(BigDecimal.valueOf(det.getCantidad())));
					}
				total=totalSinIva.add(totalConIva);*/
				
				psAct=
						con.prepareStatement("update cabecera_ventas set total_sin_iva=? , iva=?, total=? where codigo_cabecera_ventas=?");
				psAct.setBigDecimal(1,totalSinIva);
				psAct.setBigDecimal(2,totalConIva);
				psAct.setBigDecimal(3,total);
				psAct.setInt(4,CodigoCabecera);
				psAct.executeUpdate();
				
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

}
}
