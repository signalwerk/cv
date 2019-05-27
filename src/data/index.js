const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

//https://gist.github.com/kethinov/6658166
// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = (dir, filelist) => {
  var path = path || require("path");
  var fs = fs || require("fs"),
    files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

// filter all yml
let files = walkSync("./").filter(item => item.endsWith("yml"));

let data = {};
data.events = [];

files.forEach(file => {
  let doc = yaml.safeLoad(fs.readFileSync(file, "utf8"));
  data.events.push(...doc.events);
});

let events = data.events.map(event => {
  let earliest = event.dates.reduce((pre, cur) => {
    return Date.parse(pre.from || "2030-01-01") > Date.parse(cur.from)
      ? cur.from
      : pre.from;
  });

  let latest = event.dates.reduce((pre, cur) => {
    return Date.parse(pre.from || "1980-01-01") < Date.parse(cur.from)
      ? cur.from
      : pre.from;
  });

  return {
    ...event,
    from: earliest,
    to: latest
    // tags
  };
});

// eatch dates-event gets extracted to full event by it's own
let unfoldedEvents = [];
events.forEach(event => {
  event.dates.forEach(date => {
    unfoldedEvents.push({
      ...event,
      ...date,
      title: `${event.title} – ${date.title}`,
      location: `${event.location}, ${date.location}`,
      tags: [...(event.tags || []), ...(date.tags || [])],
      urls: [...(event.urls || []), ...(date.urls || [])],
      dates: null
    });
  });
});

events = [...events, ...unfoldedEvents];


const stringFiltered = (filterStr, events) => {
  let data = events.filter(item => item.tags.includes(filterStr));

  return JSON.stringify(data, null, 2);
};

fs.writeFileSync(
  "./extracted/workshops.json",
  stringFiltered("workshop", events)
);


console.log(JSON.stringify(events, null, 2));
