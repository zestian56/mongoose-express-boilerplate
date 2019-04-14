import status from "http-status";
import config from "../../config";
import request from "superagent";

const { mailChimpSettings } = config;

var mailchimpInstance = "us19",
  audienceId = mailChimpSettings.audienceId,
  mailchimpApiKey = mailChimpSettings.apiKey;

const usersApi = (app, { User }) => {
  app.get("/users", (req, res, next) => {
    res.send("OK");
  });
  app.post("/users", async (req, res, next) => {
    const { body } = req;
    let user = {};
    try {
      const docs = await User.find();
      const uid = docs.length.toString().padStart(4, "0");
      user = await User.create({
        ...body,
        id: uid
      });
      if (Boolean(user)) {
        user = user.toGraph();
        await request
          .post(
            "https://" +
              mailchimpInstance +
              ".api.mailchimp.com/3.0/lists/" +
              audienceId +
              "/members/"
          )
          .set("Content-Type", "application/json;charset=utf-8")
          .set(
            "Authorization",
            "Basic " + new Buffer("any:" + mailchimpApiKey).toString("base64")
          )
          .send({
            email_address: user.email,
            status: "subscribed",
            merge_fields: {
              EMAIL: user.email,
              FNAME: user.name,
              LNAME: user.lastName,
              PID: user.id,
              NATIONAL: user.nationality,
              DOCUMENTID: user.documentId,
              AGE: user.age,
              GENDER: user.gender,
              PHONE: user.phone,
              CELLPHONE:user.cellphone,
              ADDRESS: user.address,
              EPS: user.eps,
            }
          });
      }
    } catch (err) {
      console.error(err.message);
      return res.status(status.INTERNAL_SERVER_ERROR).send(err.message);
    }

    return res.status(status.OK).json(user);
  });
};

export default usersApi;
