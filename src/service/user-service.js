import {
  loginUserValidation,
  registerUserValidation,
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { prismaClient } from "../application/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const register = async (request) => {
  // validasi user sesuai ketentuan di joi
  const user = validate(registerUserValidation, request);

  //   cek apakah username sudah teregister
  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });
  // throw error bila user telah teregistrasi
  if (countUser === 1) {
    throw new ResponseError(400, "Username already exists");
  }
  //   encrypsi password
  user.password = await bcrypt.hash(user.password, 10);

  //   post data username and name ke db
  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      username: loginRequest.username,
    },
    select: {
      username: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(401, "Username or password incorrect");
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password incorrect");
  }
  const token = uuid().toString();

  return prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      username: user.username,
    },
    select: {
      token: true,
    },
  });
};
export default { register, login };
