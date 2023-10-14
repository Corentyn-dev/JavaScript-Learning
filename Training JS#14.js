//Creation of a function that converts RGB to HEX

//Creation of variables
var r = 255,
    g = 4,
    b = 126;

function colorOf(r, g, b) {

    //Conversion of RGB to HEX
  var rConvert16 = r.toString(16),
    gConvert16 = g.toString(16),
    bConvert16 = b.toString(16);

    //Addition of 0 if the value is less than 16
  if (r < 16) {
    rConvert16 = "0" + rConvert16;
  }

  if (g < 16) {
    gConvert16 = "0" + gConvert16;
  }

  if (b < 16) {
    bConvert16 = "0" + bConvert16;
  }

  return "#" + rConvert16 + "" + gConvert16 + "" + bConvert16;
}