import { cuentas } from "../data/cuentas.js";

//Obtiene todas las cuentas
export const getAllCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas,
  });
};

//Obtiene una cuenta por ID
export const getCuentaById = (req, res) => {
  const id = parseInt(req.params._id);
  const cuenta = cuentas.find(c => c._id === id);

  res.json({
    finded: !!cuenta,
    account: cuenta || null
  });
};

//Busca cuentas por parámetro de consulta (id, nombre o género)
export const searchCuentas = (req, res) => {
  const query = req.query.queryParam;  //Lee el parámetro de consulta (queryParam) de la URL

  const resultados = cuentas.filter(c =>
    c._id == query ||     //Compara por ID
    c.client == query ||  //Compara por nombre exacto
    c.gender == query     //Compara por género exacto
  );

  res.json({
    finded: resultados.length > 0,
    data: resultados
  });
};

//Calcula el balance total de cuentas activas
export const getCuentasBalance = (req, res) => {
  const activas = cuentas.filter(c => c.isActive === true);

  //Convierte el string del balance a número y lo suma
  const total = activas.reduce((sum, c) => {
    const numero = Number(c.balance.replace("$", "").replace(",", ""));
    return sum + numero;
  }, 0);

  res.json({
    status: activas.length > 0,
    accountBalance: `$${total.toFixed(2)}`//Se redondea a 2 decimales y se devuelve como String
  });
};
