import "dotenv/config";

const dbSettings = {
  db: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  servers: process.env.DB_SERVERS.split(" ")
};

const serverSettings = {
  port: process.env.PORT,
  host: process.env.SERVICEHOST
};

const mailChimpSettings = {
  apiKey: process.env.MAILCHIMP_API_KEY,
  audienceId: process.env.MAILCHIMP_AUDIENCE_ID
}
const config = {
  serverSettings,
  dbSettings,
  mailChimpSettings
}

export default config;