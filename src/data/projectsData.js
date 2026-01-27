const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const rawProjects = [
  { id: "project-01", vimeoId: "535435905" },
  { id: "project-02", vimeoId: "172935601" },
  { id: "project-03", vimeoId: "441815507" },
  { id: "project-04", vimeoId: "441815165" },
  { id: "project-05", vimeoId: "441814898" },
  { id: "project-06", vimeoId: "445847532" },
  { id: "project-07", vimeoId: "108340229" },
  { id: "project-08", vimeoId: "121391450" },
  { id: "project-09", vimeoId: "298721173" },
  { id: "project-10", vimeoId: "309718847" },
  { id: "project-11", vimeoId: "393232238" },
  { id: "project-12", vimeoId: "119245754" },
  { id: "project-13", vimeoId: "276047616" },
  { id: "project-14", vimeoId: "110239751" },
  { id: "project-15", vimeoId: "111544440" },
  { id: "project-16", vimeoId: "536326983" },
  { id: "project-17", vimeoId: "116476587" },
  { id: "project-18", vimeoId: "302894397" },
  { id: "project-19", vimeoId: "121477669" },
  { id: "project-20", vimeoId: "173748899" },
  { id: "project-21", vimeoId: "180465612" },
  { id: "project-22", vimeoId: "116314300" },
  { id: "project-23", vimeoId: "121271825" },
  { id: "project-24", vimeoId: "174378504" },
  { id: "project-25", vimeoId: "436327987" },
  { id: "project-26", vimeoId: "110004250" },
  { id: "project-27", vimeoId: "120497487" },
  { id: "project-28", vimeoId: "120651265" },
  { id: "project-29", vimeoId: "442419361" },
  { id: "project-30", vimeoId: "352854891" },
  { id: "project-31", vimeoId: "386929813" },
  { id: "project-32", vimeoId: "393836256" },
];

const projectTitles = {
  "project-01": "Microsoft identity in fluid motion",
  "project-02": "HIPPO OFF DUTY",
  "project-03": "McDonald’s — Chickens During Lockdown",
  "project-04": "WOLF SURVEILLANCE SYSTEM",
  "project-05": "DON’T BE SHEEP",
  "project-06": "WHEN ZEBRA MEETS ZEBRA CROSSING",
  "project-07": "HIPPO DOING WORKOUT DURING LOCKDOWN",
  "project-08": "PAPER RABBIT HAVING FOOD",
  "project-09": "MASTERCARD BUTTERFLY PARTICLE DISINTEGRATION",
  "project-10": "NIKE SHOES WITH INSTAGRAM THEME",
  "project-11": "AVENGERS DUST DISINTEGRATION EFFECT",
  "project-12": "CLOCKTHING PRODUCT PACKSHOT WITH FIBER DETAILS",
  "project-13": "KYLEE JACKSON JEWELRY PACKSHOT ANIMATION",
  "project-14": "CIVIC WALLET UI UX & 3D PROTOTYPE",
  "project-15": "3D UI INTERACTION ANIMATION",
  "project-16": "ABSTRACT FIBER ANIMATION",
  "project-17": "CRYSTAL BLOOM — Procedural Houdini Animation",
  "project-18": "EARBUD PRODUCT VISUALIZATION",
  "project-19": "APPLE CHOCOLATE PACKSHOT — Houdini × C4D",
  "project-20": "MOCKTAIL SPLASH SIMULATION — RealFlow × C4D × Octane",
  "project-21": "DRAGON BEER PACKSHOT ANIMATION — RealFlow × C4D × Octane",
  "project-22": "FRUIT DROPLET SIMULATION — Houdini Fluids",
  "project-23": "INFINITE DATA LOOP — C4D × Redshift",
  "project-24": "PROCEDURAL PLANT GROWTH — C4D × Octane",
  "project-25": "NESTLÉ CHOCOLATE PACKSHOT ANIMATION — Houdini × Redshift",
  "project-26": "REAL-TIME DATA PIPELINE — C4D × Redshift",
  "project-27": "CIVIC WALLET UI/UX & 3D PROTOTYPE — C4D × Redshift × Figma",
  "project-28": "PROCEDURAL DATA FLOW LOOP — HOUDINI × Redshift",
  "project-29": "CLOUD BLOOM 5G — Houdini × Redshift",
  "project-30": "MIDNIGHT FRAGRANCE ENVIRONMENT — Houdini × C4D × Redshift",
  "project-31": "DISTRIBUTED 5G ECOSYSTEM — Houdini × C4D × Redshift",
  "project-32": "ROAD SAFETY IMPACT SIMULATION — Royal Police of Oman",
  
};

export const projects = shuffle(
  rawProjects.map(p => ({
    ...p,
    title: projectTitles[p.id] || p.id, // ← change only this line
  }))
);