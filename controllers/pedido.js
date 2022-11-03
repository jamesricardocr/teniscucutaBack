const { response } = require("express");
const pedido = require("../models/pedido");
const factura = require("../models/factura");
const guia = require("../models/guia");
const remitente = require("../models/remitente");
const producto = require("../models/producto");
const uniqid = require("uniqid");
const idAutoIncrement = require("id-auto-increment");

let theRemitente;

const getRemitente = async () => {
  theRemitente = await remitente.findAll({
    where: {
      id: 1,
    },
  });
};
getRemitente();

const pedidoPost = async (req, res = response) => {
  // const uniqueID = uniqid();
  console.log(req.body);
  req.body.editadopor = "cliente";
  req.body.estadopedido = "Pedido recibido";
  req.body.infopago = "Pendiente";
  req.body.tipoenvio = "Por definir";
  // req.body.iddos = uniqueID;

  const body = req.body;
  console.log(body);
  try {
    let p = await pedido.create(body);
    return res.status(201).json({
      msg: "pedido creado exitosamente",
      pedido:  p.id,
      total: p.total
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

  try {
    const pedidoAll = await pedido.findAll({ where: { id } });
    console.log(pedidoAll);
    res.json({
      estado: pedidoAll[0].estadopedido,
      id: pedidoAll[0].id,
      empresa: pedidoAll[0].empresaguia,
      guia: pedidoAll[0].numeroguia,
    });
  } catch (error) {
    return res.status(400).json({
      error: "El numero de pedido no existe",
    });
  }
};

const pedidoPut = async (req, res = response) => {
  const id = req.params.id;
  req.body.editadopor = req.user.email;
  const body = req.body;
  console.log(body);
  // const bodyFactura = {
  //   nombrecliente: req.body.nombre,
  //   cedula: req.body.cedula,
  //   telefono: req.body.telefono,
  //   email: req.body.email,
  //   departamento: req.body.departamento,
  //   ciudad: req.body.ciudad,
  //   direccion: req.body.direccion,
  //   total: req.body.total,
  //   estado: req.body.estadopedido,
  //   pedidoID: req.body.id,
  // };

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
    pedidoID: req.body.id,
  };

  try {
    const laguia = await guia.findAll({ where: { pedidoID: id } });
    if (laguia.length > 0) {
      const guiaUpdate = await pedido.update(bodyGuia, {
        where: { pedidoID: id },
      });
    } else {
      if (req.body.estadopedido != "Pedido recibido") {
        guia.create(bodyGuia);
      }
    }
    // const laFactura = await factura.update(bodyFactura, {
    //   where: { pedidoID: id },
    // });

    if (
      req.body.estadopedido != "Pedido recibido" &&
      req.body.estadopedido != "Pago aprobado"
    ) {
      const productosAactualizar = req.body.productospedido;
      let newArrayStock;
      productosAactualizar.map(async (p) => {
        const productoAll = await producto.findAll({ where: { id: p.id } });
        const productoSplit = await productoAll[0].stock.split(",");
        productoSplit.map((array) => {
          const temporal = array.split(":");
          if (temporal[0] === p.talla) {
            const oldStock = `${temporal[0]}:${temporal[1]}`;
            const cantidadModificada = Number(temporal[1]) - Number(p.cantidad);
            temporal[1] = cantidadModificada.toString();
            const newStock = `${temporal[0]}:${temporal[1]}`;
            newArrayStock = productoAll[0].stock.replace(oldStock, newStock);
          }
        });
        console.log(newArrayStock, typeof newArrayStock);
        const productoChangeStock = await producto.update(
          { stock: newArrayStock },
          { where: { id: p.id } }
        );
      });
    }

    const pedidoAll = await pedido.update(body, { where: { id } });
    if (pedidoAll && laguia) {
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
  pedidoGetid,
};
