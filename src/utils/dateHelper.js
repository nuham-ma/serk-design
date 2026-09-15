// Ethiopian and Gregorian Calendar Date Utilities

export function gregorianToEthiopian(date = new Date()) {
  const gYear = date.getFullYear();
  const gMonth = date.getMonth() + 1; // 1-12
  const gDay = date.getDate();

  const isGregorianLeap = (gYear % 4 === 0 && gYear % 100 !== 0) || (gYear % 400 === 0);
  const newYearDay = (gYear % 4 === 3) ? 12 : 11;
  
  const daysInMonths = [0, 31, isGregorianLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayOfYear = 0;
  for (let m = 1; m < gMonth; m++) {
    dayOfYear += daysInMonths[m];
  }
  dayOfYear += gDay;

  let newYearDayOfYear = 0;
  for (let m = 1; m < 9; m++) {
    newYearDayOfYear += daysInMonths[m];
  }
  newYearDayOfYear += newYearDay;

  let ethYear, ethMonth, ethDay;

  if (dayOfYear >= newYearDayOfYear) {
    ethYear = gYear - 7;
    const diff = dayOfYear - newYearDayOfYear;
    ethMonth = Math.floor(diff / 30) + 1;
    ethDay = (diff % 30) + 1;
  } else {
    ethYear = gYear - 8;
    const prevDaysInMonths = [0, 31, ((gYear - 1) % 4 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let prevNewYearDayOfYear = 0;
    const prevNewYearDay = ((gYear - 1) % 4 === 3) ? 12 : 11;
    for (let m = 1; m < 9; m++) {
      prevNewYearDayOfYear += prevDaysInMonths[m];
    }
    prevNewYearDayOfYear += prevNewYearDay;
    
    const daysInPrevYear = ((gYear - 1) % 4 === 0 && (gYear - 1) % 100 !== 0) || ((gYear - 1) % 400 === 0) ? 366 : 365;
    const diff = (daysInPrevYear - prevNewYearDayOfYear) + dayOfYear;
    ethMonth = Math.floor(diff / 30) + 1;
    ethDay = (diff % 30) + 1;
  }

  const amharicMonths = [
    '',
    'መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ',
    'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዝያ',
    'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜን'
  ];

  const amharicDays = [
    'እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'
  ];

  return {
    year: ethYear,
    month: ethMonth,
    monthName: amharicMonths[ethMonth] || '',
    day: ethDay,
    dayName: amharicDays[date.getDay()],
    fullDate: `${amharicMonths[ethMonth]} ${ethDay} ቀን ${ethYear} ዓ.ም.`,
    dateWithDay: `${amharicDays[date.getDay()]}፣ ${amharicMonths[ethMonth]} ${ethDay} ቀን ${ethYear} ዓ.ም.`
  };
}

export function getLocalizedDate(lang, date = new Date()) {
  if (lang === 'am') {
    const eth = gregorianToEthiopian(date);
    return eth.dateWithDay;
  }
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export function getLocalizedShortDate(lang, date = new Date()) {
  if (lang === 'am') {
    const eth = gregorianToEthiopian(date);
    return `${eth.monthName} ${eth.year} ዓ.ም.`;
  }
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}

export function getLocalizedYear(lang, date = new Date()) {
  if (lang === 'am') {
    const eth = gregorianToEthiopian(date);
    return `${eth.year} ዓ.ም.`;
  }
  return `${date.getFullYear()}`;
}

