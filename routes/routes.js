module.exports = ({ express, app }) => {
    app.use("/v1/volunteers", require("./volunteer.route")(express));
    app.use("/v1/getStats",require("./stats.route")(express))
};
