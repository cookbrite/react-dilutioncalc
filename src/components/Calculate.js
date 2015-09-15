export default function (part1, part2, bottle) {  
  part1 = parseInt(part1);
  part2 = parseInt(part2);
  var parts = part1 + part2;
  var step = bottle / parts;
  var res1 = Math.round(step * part1).toFixed(2).split(".");
  var res2 = Math.round(step * part2).toFixed(2).split(".");
  var percentage = part1*100/(part1+part2);
  var result = res1[0] + ":" + res2[0];

  var res = [result, percentage];
  return res;
}