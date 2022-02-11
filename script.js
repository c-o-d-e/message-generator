// Sun and Moon astrology generator

const sunguide = {
  "Aries Sun": "Independent trailblazer",
  "Taurus Sun": "Sensually creative",
  "Gemini Sun": "Master of communication",
  "Cancer Sun": "Nurturing healer",
  "Leo Sun": "Royal entertainer",
  "Virgo Sun": "Analytical organizer",
  "Libra Sun": "Lover of beauty and peace",
  "Scorpio Sun": "Investigative transformer",
  "Sagittarius Sun": "Explorer and visionary",
  "Capricorn Sun": "Powerful and driven",
  "Aquarius Sun": "Philanthropist and humanitarian",
  "Pisces Sun": "Compassionate creative ",
};

const moonguide = {
  "Aries Moon": "Energetic, passionate with hot emotions",
  "Taurus Moon": "Values comfort, beautiful surroundings, and indulgence",
  "Gemini Moon": "Communicative and seeks mental stimulation",
  "Cancer Moon": "Sensitive, emotional, and stability loving",
  "Leo Moon": "Creative and fun-loving. Eternal inner child",
  "Virgo Moon": "Detail-oriented, analytical, and rational",
  "Libra Moon": "Craves partnership and appreciates beauty",
  "Scorpio Moon": "Deep emotional intensity and intuition",
  "Sagittarius Moon": "Optimistic, open-minded, and craves new experiences",
  "Capricorn Moon": "Reserved emotions, hard-working, and reliable",
  "Aquarius Moon": "Unique, futuristic, and caring towards the collective",
  "Pisces Moon": "Intuitive, free-flowing, and creative ",
};

// Array generator of the values of any object
const randomArr = (obj) => Object.values(obj);

//Assign the values of sunguide and moonguide objects to an array
const sunguideArr = randomArr(sunguide);
const moonguideArr = randomArr(moonguide);

// console.log(sunguideArr);
// console.log(moonguideArr);

//Using Math.random to selecting a random output
const randomSelector = (arr) => {
  let randomMessage = "";
  randomMessage = arr[Math.floor(Math.random() * (arr.length + 1))];
  return randomMessage;
};

const finalMessage = `In tandem with the energy from the Sun and the Moon, you will be ${randomSelector(
  sunguideArr
).toLowerCase()}. Also, ${randomSelector(moonguideArr).toLowerCase()}`;

console.log(finalMessage);
