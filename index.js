var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + placeInLine + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }

  var person = katzDeliLine[0];
  katzDeli = katzDeli.slice(1);
  return `Currently serving ${person}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var names = [];

  for (var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    var idx = i + 1;
    names.push(idx + ". " + name);
  }

  return "The line is currently: " + names.join(', ');
}
