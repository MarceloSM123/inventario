select identificador_proveedores,tipo_documento,nombre,telefono,correo,direccion from proveedores 
where upper(nombre) like '%SA%'

insert into tipo_documentos(codigo_tipo_documentos,descripcion)
values('C','Cedula')
insert into tipo_documentos(codigo_tipo_documentos,descripcion)
values('R','ruc')

insert into proveedores(identificador_proveedores, tipo_documento,nombre, telefono,correo,direccion)
values(172584,'C','Marcelo Salcedo', 12,'123@gmial.com','calle S')

select codigo_tipo_documentos, descripcion from tipo_documentos
select * from proveedores
-- consulta de obtencion de descripcion de tipo de documento uniendo tablas
select prov.identificador_proveedores,prov.tipo_documento,td.descripcion ,prov.nombre,prov.telefono,prov.correo,prov.direccion 
from proveedores prov, tipo_documentos td
where prov.tipo_documento=td.codigo_tipo_documentos and upper(nombre) like '%SA%'

select * from productos prod, unidades_medida udm, categorias cat
select * from unidades_medida udm
select * from categorias cat

select prod.codigo_productos, prod.nombre as nombre_producto, 
udm.codigo_udm as nombre_udm, udm.descripcion as descripcion_udm, 
cast(prod.precio_de_venta as decimal(6,2)) , prod.tiene_iva, cast(prod.coste as decimal(5,4)), prod.categoria, cat.nombre as nombre_categoria,stock
from productos prod, unidades_medida udm, categorias cat
where prod.udm_fk = udm.codigo_udm 
and prod.categoria=cat.codigo_cat
and upper(prod.nombre) like '%C%'
