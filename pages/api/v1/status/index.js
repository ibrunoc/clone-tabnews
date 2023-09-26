function status(request, response) {
  response.status(200).json({ key: "Criando uma API?!" });
}

export default status;
