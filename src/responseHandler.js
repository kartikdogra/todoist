function handlingError(res) {
  res === 200? console.log("succesfully done"): console.log("error !!!\nCheck the data");
}

module.exports = handlingError;
