enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
let soma = StatusCodes.NotFound  + StatusCodes.Success;

  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

  console.log(soma);