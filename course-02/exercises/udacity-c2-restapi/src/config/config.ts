// export const config = {
//   "dev": {
//     "username": "udagramdb",
//     "password": "sxhkXOMntxNG9zAlkdud",
//     "database": "postgres",
//     "host": "udagram-project-database.cyoiar5twzwh.us-east-1.rds.amazonaws.com",
//     "dialect": "postgres",
//     "aws_region": "us-east-1",
//     "aws_profile": "default",
//     "aws_media_bucket": "udagram-project-cloudstore"
//   },
//   "jwt": {
//     "secret": " "
//   },
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   }
// }

export const config = {
  "dev": {
    "postgres": {
      "username": "postgres",
      "password": "ZeLOJ8OdEiv9HYLNcYUV",
      "database": "udacityudagramprojectdb",
      "host": "udacityudagramprojectdb.czvsrmldkwbm.us-east-1.rds.amazonaws.com",
      "dialect": "postgres",
    },
    "aws": {
      "profile": "default",
      "region": "",
      "media_bucket": ""
    },
    "jwt": {
      "secret": "",
    }
  },
  "prod": {

  }
}