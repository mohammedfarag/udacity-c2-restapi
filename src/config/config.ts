export const config = {
  dev: {
    username: process.env.FWD_POSTGRESS_USERNAM,
    password: process.env.FWD_POSTGRESS_PASSWORD,
    database: process.env.FWD_POSTGRESS_DATABASE,
    host: process.env.FWD_POSTGRESS_HOST,
    dialect: process.env.FWD_POSTGRESS_DIALECT,
    aws_region: process.env.FWD_AWS_REGION,
    aws_profile: process.env.FWD_AWS_PROFILE,
    aws_media_bucket: process.env.FWD_BUCKET,
  },
  jwt: {
    secret: process.env.FWD_JWT_SECRET,
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
