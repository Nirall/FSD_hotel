function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context("./", true, /\.(js|s?css)$/i));

import "./blocks/datepicker-2f/datepicker.js";
import "./blocks/datepicker-2f/controller-2f.js";
import "./blocks/datepicker-1f/datepicker-1f.js";
