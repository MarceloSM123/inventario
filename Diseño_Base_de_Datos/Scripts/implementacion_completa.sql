drop table if exists categorias;
DELETE FROM categorias;
create table categorias (
	codigo_cat SERIAL not null,
	nombre varchar(100) not null,
	categoria_padre int ,
	constraint categorias_pk primary key (codigo_cat),
	constraint categorias_fk foreign key (categoria_padre)
	references categorias(codigo_cat)
);

INSERT INTO categorias (codigo_cat, nombre, categoria_padre) VALUES
(1, 'Materia Prima', NULL),
(2, 'Proteína', 1),
(3, 'Salsas', 1),
(4, 'Punto de Venta', NULL),
(5, 'Bebidas', 4),
(6, 'Con alcohol', 5),
(7, 'Sin alcohol', 5);

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

INSERT INTO categorias_unidad_medida (codigo_udm, nombre) VALUES
('U', 'Unidades'),
('V', 'Volumen'),
('P', 'Peso');

select * from categorias_unidad_medida;

drop table if exists unidades_medida CASCADE;
CREATE TABLE unidades_medida (
    codigo_udm CHAR(2) PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    categoria_udm CHAR(1) NOT NULL,
    CONSTRAINT fk_categoria_udm
        FOREIGN KEY (categoria_udm)
        REFERENCES categorias_unidad_medida (codigo_udm)
);

INSERT INTO unidades_medida (codigo_udm, descripcion, categoria_udm) VALUES
('ml', 'mililitros', 'V'),
('l', 'litros', 'V'),
('u', 'unidad', 'U'),
('d', 'docena', 'U'),
('g', 'gramos', 'P'),
('kg', 'kilogramos', 'P'),
('lb', 'libras', 'P');

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
drop table if exists productos CASCADE;
CREATE TABLE productos (
    codigo_productos INT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    udm_fk CHAR(2) NOT NULL,
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

--ALTER TABLE productos ALTER COLUMN categoria DROP NOT NULL;
INSERT INTO productos (codigo_productos, nombre, udm_fk, precio_de_venta, tiene_iva, coste, categoria, stock) VALUES
(1, 'Coca cola pequeña', 'u', 0.5804, true, 0.3729, 7, 105),
(2, 'Salsa de tomate', 'kg', 0.95, true, 0.8736, 3, 0),
(3, 'Mostaza', 'kg', 0.95, true, 0.89, 3, 0),
(4, 'Fuze Tea', 'u', 0.8, true, 0.7, 7, 49);

select * from productos;

CREATE TABLE estados_pedido (
    codigo_estados_pedido CHAR(1) PRIMARY KEY,
    descripcion VARCHAR(20) NOT NULL
);
INSERT INTO estados_pedido (codigo_estados_pedido, descripcion) VALUES
('S', 'Solicitado'),
('R', 'Recibido');

select * from estados_pedido;
drop table if exists cabecera_pedido CASCADE;
CREATE TABLE cabecera_pedido (
    numero_cabecera_pedido serial PRIMARY KEY,
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
drop table if exists detalle_pedido CASCADE;
CREATE TABLE detalle_pedido (
--Serial
    codigo_detalle_pedido serial PRIMARY KEY,
    cabecera_pedido INT NOT NULL,
    producto INT NOT NULL,
    cantidad_solicitada INT NOT NULL,
	subtotal NUMERIC(10,2) not null,
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