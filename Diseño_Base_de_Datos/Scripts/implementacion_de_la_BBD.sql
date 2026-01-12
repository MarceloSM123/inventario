drop table if exists categorias;
create table categorias (
	codigo_cat SERIAL not null,
	nombre varchar(100) not null,
	categoria_padre int ,
	constraint categorias_pk primary key (codigo_cat),
	constraint categorias_fk foreign key (categoria_padre)
	references categorias(codigo_cat)
);

insert into categorias (nombre, categoria_padre)
values ('materia prima',null);
insert into categorias (nombre, categoria_padre)
values ('proteina',1);
insert into categorias (nombre, categoria_padre)
values ('salsas',1);
insert into categorias (nombre, categoria_padre)
values ('punto venta',null);
insert into categorias (nombre, categoria_padre)
values ('bebidas',4);
insert into categorias (nombre, categoria_padre)
values ('con alcohol',5);
insert into categorias (nombre, categoria_padre)
values ('sin alcohol',5);

select * from categorias;

CREATE TABLE categorias_unidad_medida (
    codigo_udm CHAR(1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

select * from categorias_unidad_medida;
CREATE TABLE unidades_medida (
    codigo_udm CHAR(1) PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    categoria_udm CHAR(1) NOT NULL,
    CONSTRAINT fk_categoria_udm
        FOREIGN KEY (categoria_udm)
        REFERENCES categorias_unidad_medida (codigo_udm)
);

select * from unidades_medida;
CREATE TABLE tipo_documentos (
    codigo_tipo_documentos CHAR(1) PRIMARY KEY,
    descripcion VARCHAR(6) NOT NULL
);

select * from tipo_documentos;_
CREATE TABLE proveedores (
    identificador_proveedores INT PRIMARY KEY,
    tipo_documento CHAR(1) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    telefono INT NOT NULL,
    correo VARCHAR(30) NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    CONSTRAINT fk_tipo_documento
        FOREIGN KEY (tipo_documento)
        REFERENCES tipo_documentos (codigo_tipo_documentos)
);

select * from proveedores;

CREATE TABLE productos (
    codigo_productos INT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    udm_fk CHAR(1) NOT NULL,
    precio_de_venta NUMERIC(10,2) NOT NULL,
    tiene_iva BOOLEAN NOT NULL,
    coste NUMERIC(10,2) NOT NULL,
    categoria INT NOT NULL,
    stock INT NOT NULL,
    CONSTRAINT fk_udm
        FOREIGN KEY (udm_fk)
        REFERENCES unidades_medida (codigo_udm),
    CONSTRAINT fk_categoria_producto
        FOREIGN KEY (categoria)
        REFERENCES categorias (codigo_cat)
);

select * from productos;

CREATE TABLE estados_pedido (
    codigo_estados_pedido CHAR(1) PRIMARY KEY,
    descripcion VARCHAR(20) NOT NULL
);

select * from estados_pedido;

CREATE TABLE cabecera_pedido (
    numero_cabecera_pedido INT PRIMARY KEY,
    proveedor INT NOT NULL,
    fecha TIMESTAMP NOT NULL,
    estado CHAR(1) NOT NULL,
    CONSTRAINT fk_proveedor
        FOREIGN KEY (proveedor)
        REFERENCES proveedores (identificador_proveedores),
    CONSTRAINT fk_estado_pedido
        FOREIGN KEY (estado)
        REFERENCES estados_pedido (codigo_estados_pedido)
);

select * from cabecera_pedido;

CREATE TABLE detalle_pedido (
    codigo_detalle_pedido INT PRIMARY KEY,
    cabecera_pedido INT NOT NULL,
    producto INT NOT NULL,
    cantidad_solicitada INT NOT NULL,
    cantidad_recibida INT NOT NULL,
    CONSTRAINT fk_cabecera_pedido
        FOREIGN KEY (cabecera_pedido)
        REFERENCES cabecera_pedido (numero_cabecera_pedido),
    CONSTRAINT fk_producto_pedido
        FOREIGN KEY (producto)
        REFERENCES productos (codigo_productos)
);

select * from detalle_pedido;

CREATE TABLE historial_stock (
    codigo_historial_stock INT PRIMARY KEY,
    fecha TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    referencia VARCHAR(30) NOT NULL,
    producto INT NOT NULL,
    cantidad INT NOT NULL,
    CONSTRAINT fk_producto_historial
        FOREIGN KEY (producto)
        REFERENCES productos (codigo_productos)
);

select * from historial_stock;

CREATE TABLE cabecera_ventas (
    codigo_cabecera_ventas INT PRIMARY KEY,
    fecha TIMESTAMP NOT NULL,
    total_sin_iva NUMERIC(10,2),
    iva NUMERIC(10,2),
    total NUMERIC(10,2)
);

select * from cabecera_ventas; 

CREATE TABLE detalle_ventas (
    codigo_detalle_ventas INT PRIMARY KEY,
    cabecera_ventas INT NOT NULL,
    producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_venta NUMERIC(10,2) NOT NULL,
    subtotal NUMERIC(10,2) NOT NULL,
    subtotal_con_iva NUMERIC(10,2) NOT NULL,
    CONSTRAINT fk_cabecera_ventas
        FOREIGN KEY (cabecera_ventas)
        REFERENCES cabecera_ventas (codigo_cabecera_ventas),
    CONSTRAINT fk_producto_ventas
        FOREIGN KEY (producto)
        REFERENCES productos (codigo_productos)
);

select * from detalle_ventas;