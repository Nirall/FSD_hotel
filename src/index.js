function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context("./", true, /\.(js|s?css|png|jpe?g|gif|svg)$/i));

import "./blocks/datepicker-2f/datepicker.js";
import "./blocks/datepicker-2f/Datepicker-2f.js";
import "./blocks/datepicker-1f/Datepicker-1f.js";
