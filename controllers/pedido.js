const { response } = require("express");
const pedido = require("../models/pedido");
const factura = require("../models/factura");
const guia = require("../models/guia");
const remitente = require("../models/remitente");

const uniqid = require("uniqid");

const pedidoPost = async (req, res = response) => {
  const theRemitente = await remitente.findAll({
    where: {
      id: 1,
    },
  });

  const uniqueID = uniqid();

  req.body.editadopor = "cliente";
  req.body.estadopedido = "Pedido recibido";
  req.body.infopago = "Pendiente";
  req.body.tipoenvio = "Por definir";
  req.body.id = uniqueID;

  const bodyFactura = {
    nombrecliente: req.body.nombre,
    cedula: req.body.cedula,
    telefono: req.body.telefono,
    email: req.body.email,
    departamento: req.body.departamento,
    ciudad: req.body.ciudad,
    direccion: req.body.direccion,
    total: req.body.total,
    estado: req.body.estadopedido,
    pedidoID: uniqueID,
  };
  const bodyGuia = {
    destinatarionombre: req.body.nombre,
    destinatariocedula: req.body.cedula,
    destinatariotelefono: req.body.telefono,
    destinatariodireccion: `${req.body.departamento} ${req.body.ciudad} ${req.body.direccion} `,
    nombreremitente: theRemitente[0].nombre,
    cedularemitente: theRemitente[0].cedula,
    telefonoremitente: theRemitente[0].telefono,
    ciudadremitente: "Cúcuta",
    direccionremitente: theRemitente[0].direccion,
    pedidoID: uniqueID,
  };

  const body = req.body;
  try {
    pedido.create(body);
    factura.create(bodyFactura);
    guia.create(bodyGuia);
    return res.status(201).json({
      msg: "pedido creado exitosamente",
      uniqueID
    });
  } catch (error) {
    return res.status(400).json({
      msg: "no se pudo agregar el pedido",
      body,
    });
  }
};

const pedidoGet = async (req, res = response) => {
  const pedidoAll = await pedido.findAll();
  const guiaAll = await guia.findAll();
  const facturaAll = await factura.findAll();
  res.json({
    msg: "mostrando los pedido desde el get",
    pedidoAll,
    guiaAll,
    facturaAll,
  });
};

const pedidoGetid = async (req, res = response) => {
  const id = req.params.id;

  const pedidoAll = await pedido.findAll({ where: { id }} );
  res.json({
    estado: pedidoAll[0].estadopedido,
    id: pedidoAll[0].id,
  });
};

const pedidoPut = async (req, res = response) => {
  const id = req.params.id;
  req.body.editadopor = req.user.email;
  const body = req.body;

  try {
    const pedidoAll = await pedido.update(body, { where: { id } });
    if (pedidoAll) {
      return res.status(201).json({
        msg: "El pedido fue actualizado exitosamente",
        status: pedidoAll,
      });
    }
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema al actualizar el pedido",
    });
  }
};

const pedidoDelete = async (req, res = response) => {
  const id = req.params.id;

  try {
    const pedidoAll = await pedido.update(
      { estadopedido: "desactivado" },
      { where: { id } }
    );
    return res.status(200).json({
      msg: "El pedido fue borrado exitosamente..",
      status: pedidoAll,
    });
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema al borrar el pedido",
      status: pedidoAll,
    });
  }
};



module.exports = {
  pedidoPost,
  pedidoGet,
  pedidoPut,
  pedidoDelete,
  pedidoGetid
};