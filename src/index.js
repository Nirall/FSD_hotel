function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context("./", true, /\.(js|s?css|png|jpe?g|gif|svg)$/i));

import "./lib/air-datepicker/air-datepicker.js";
