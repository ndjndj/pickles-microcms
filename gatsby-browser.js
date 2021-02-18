const style = require("./src/styles/style.css");

module.exports = style;

module.exports.onClientEntry = () => {
    console.log("We have started!!!!");
}
