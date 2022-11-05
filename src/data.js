/**
 * 
We want a table with the following columns: 
ID
Name
Altitude
Latitude
Longitude
LaunchDate

 */
export function _sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// getSatelliteData returns a string of JSON that contains satellite location information.
export async function getSatelliteData() {
  await _sleep(30);
  return _satelliteInfo;
}

// startSatelliteUpdateEvents sends events to the specified element, each
// of which indicates a state change for a satellite.
export async function startSatelliteUpdateEvents(elem) {
  while (true) {
    await _sleep(5000);
    _emitSatelliteStateChangeEvent(elem);
  }
}

export const states = ["offline", "online", "busy", "alien"];

// ------------------------------------------------------------------------
function _emitSatelliteStateChangeEvent(elem) {
  let satellites = _satelliteInfo.above;
  const id = satellites[Math.floor(Math.random() * satellites.length)].satid;

  const state = states[Math.floor(Math.random() * states.length)];

  let event = new CustomEvent("satUpdate", {
    detail: {
      id,
      state
    },
    bubbles: true,
    cancelable: true
  });

  elem.dispatchEvent(event);
}

let _satelliteInfo = {
  info: {
    category: "Space & Earth Science",
    transactionscount: 1,
    satcount: 27
  },
  above: [
    {
      satid: 730,
      satname: "SOLRAD 7A",
      intDesignator: "1964-001D",
      launchDate: "1964-01-11",
      satlat: 48.2588,
      satlng: -114.2214,
      satalt: 920.084
    },
    {
      satid: 1804,
      satname: "ALOUETTE 2",
      intDesignator: "1965-098A",
      launchDate: "1965-11-29",
      satlat: 47.981,
      satlng: -119.923,
      satalt: 1621.248
    },
    {
      satid: 6197,
      satname: "EXPLORER 47 (IMP-7)",
      intDesignator: "1972-073A",
      launchDate: "1972-09-23",
      satlat: 10.7977,
      satlng: 167.9693,
      satalt: 176042.7158
    },
    {
      satid: 6893,
      satname: "EXPLORER 50 (IMP-8)",
      intDesignator: "1973-078A",
      launchDate: "1973-10-26",
      satlat: -21.5311,
      satlng: -111.7958,
      satalt: 257558.7245
    },
    {
      satid: 8748,
      satname: "SOLRAD 11A",
      intDesignator: "1976-023C",
      launchDate: "1976-03-15",
      satlat: 17.8393,
      satlng: -161.5294,
      satalt: 117286.3134
    },
    {
      satid: 11251,
      satname: "METEOR 1-29",
      intDesignator: "1979-005A",
      launchDate: "1979-01-25",
      satlat: 31.3792,
      satlng: -116.874,
      satalt: 443.9584
    },
    {
      satid: 20169,
      satname: "HIPPARCOS",
      intDesignator: "1989-062B",
      launchDate: "1989-08-08",
      satlat: -6.1297,
      satlng: -100.3635,
      satalt: 35742.6762
    },
    {
      satid: 22996,
      satname: "SJ-4",
      intDesignator: "1994-010A",
      launchDate: "1994-02-08",
      satlat: 7.6575,
      satlng: -98.0924,
      satalt: 8165.9393
    },
    {
      satid: 23715,
      satname: "ISO",
      intDesignator: "1995-062A",
      launchDate: "1995-11-17",
      satlat: 1.4309,
      satlng: -84.579,
      satalt: 47128.6526
    },
    {
      satid: 24293,
      satname: "INTERBALL AURORA",
      intDesignator: "1996-050C",
      launchDate: "1996-08-29",
      satlat: 50.2378,
      satlng: -160.3202,
      satalt: 18959.7734
    },
    {
      satid: 25068,
      satname: "EQUATOR S",
      intDesignator: "1997-075B",
      launchDate: "1997-12-02",
      satlat: 2.7803,
      satlng: -112.5977,
      satalt: 57344.6985
    },
    {
      satid: 26410,
      satname: "CLUSTER II-FM6",
      intDesignator: "2000-041A",
      launchDate: "2000-07-16",
      satlat: 17.8122,
      satlng: -92.5417,
      satalt: 32852.5875
    },
    {
      satid: 26411,
      satname: "CLUSTER II-FM7",
      intDesignator: "2000-041B",
      launchDate: "2000-07-16",
      satlat: 27.4467,
      satlng: -77.917,
      satalt: 24774.2564
    },
    {
      satid: 26463,
      satname: "CLUSTER II-FM5",
      intDesignator: "2000-045A",
      launchDate: "2000-08-09",
      satlat: 21.7606,
      satlng: -82.0037,
      satalt: 27115.7927
    },
    {
      satid: 26464,
      satname: "CLUSTER II-FM8",
      intDesignator: "2000-045B",
      launchDate: "2000-08-09",
      satlat: 17.6536,
      satlng: -92.7226,
      satalt: 32819.2442
    },
    {
      satid: 27540,
      satname: "INTEGRAL",
      intDesignator: "2002-048A",
      launchDate: "2002-10-17",
      satlat: 46.94,
      satlng: -42.5977,
      satalt: 137778.3987
    },
    {
      satid: 27691,
      satname: "USA 167",
      intDesignator: "2003-008A",
      launchDate: "2003-03-11",
      satlat: 7.4393,
      satlng: -130.2266,
      satalt: 35776.7902
    },
    {
      satid: 29051,
      satname: "FORMOSAT 3E",
      intDesignator: "2006-011E",
      launchDate: "2006-04-15",
      satlat: 44.7512,
      satlng: -137.7736,
      satalt: 848.8665
    },
    {
      satid: 32060,
      satname: "WORLDVIEW 1",
      intDesignator: "2007-041A",
      launchDate: "2007-09-18",
      satlat: 41.9655,
      satlng: -114.4459,
      satalt: 496.8583
    },
    {
      satid: 36395,
      satname: "SDO",
      intDesignator: "2010-005A",
      launchDate: "2010-02-11",
      satlat: 26.0629,
      satlng: -106.3283,
      satalt: 35787.4175
    },
    {
      satid: 37222,
      satname: "STPSAT 2 (USA 217)",
      intDesignator: "2010-062A",
      launchDate: "2010-11-20",
      satlat: 31.8506,
      satlng: -115.9917,
      satalt: 644.8133
    },
    {
      satid: 37227,
      satname: "FAST 1 (USA 222)",
      intDesignator: "2010-062F",
      launchDate: "2010-11-20",
      satlat: 41.2462,
      satlng: -125.0224,
      satalt: 647.7857
    },
    {
      satid: 37380,
      satname: "FAST 2 (USA 228)",
      intDesignator: "2010-062M",
      launchDate: "2010-11-20",
      satlat: 27.7313,
      satlng: -125.9616,
      satalt: 646.6836
    },
    {
      satid: 37755,
      satname: "SPEKTR R",
      intDesignator: "2011-037A",
      launchDate: "2011-07-18",
      satlat: 5.91,
      satlng: -175.3688,
      satalt: 357716.6348
    },
    {
      satid: 38752,
      satname: "RBSP A",
      intDesignator: "2012-046A",
      launchDate: "2012-08-30",
      satlat: 1.2312,
      satlng: -113.8992,
      satalt: 26507.2003
    },
    {
      satid: 38753,
      satname: "RBSP B",
      intDesignator: "2012-046B",
      launchDate: "2012-08-30",
      satlat: -8.384,
      satlng: -161.0171,
      satalt: 26122.0944
    },
    {
      satid: 43435,
      satname: "TESS",
      intDesignator: "2018-038A",
      launchDate: "2018-04-18",
      satlat: 10.4723,
      satlng: -152.9665,
      satalt: 340588.3661
    }
  ]
};
