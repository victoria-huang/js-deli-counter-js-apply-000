function takeANumber(katzDeliLine, name) {
  var placeInLine = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + placeInLine + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var person = katzDeliLine[0];
  katzDeliLine = katzDeliLine.slice(1);
  return `Currently serving ${person}.``;
}
