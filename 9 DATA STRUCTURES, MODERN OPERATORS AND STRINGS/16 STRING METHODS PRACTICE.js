const flights =
  "_Delayed_Departure; fao93766109;txl2133758440;11:25+_Arrival;bru0943384722; fao93766109;11:45+_Delayed_Arrival; hel7439299980; fao93766109; 12:05+_Departure; fao93766109; lis2323639855;12:30";

const flightsArr = flights.split("+_");

for (const flight of flightsArr) {
  const data = flight.split(";");
  const message = data[0].trim().replaceAll("_", " ").trim();
  const from = data[1].trim().slice(0, 3).toUpperCase();
  const to = data[2].trim().slice(0, 3).toUpperCase();
  const time = data[3].trim().replace(":", "h");
  console.log(` ${message.includes('Delayed') ? '🔴' : '' } ${message} from ${from} from ${to} (${time})`.padStart(47));
}
