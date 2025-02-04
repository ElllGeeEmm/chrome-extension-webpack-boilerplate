const wordArray = [
  'regret to inform',
  'thank you for your interest',
  'I have the unpleasant duty',
  'you have not been selected',
  'we received a high volume of strong',
  'We received a high volume of applicants',
  'Thank you so much for taking the time',
  'writing with the disappointing news',
  'not to proceed',
  'I am really sorry to tell you that unfortunately',
  'We appreciate your interest',
  'After careful consideration',
  'we’ve decided it’s not quite the right match at this time',
  'We appreciate that you took the time to apply for the position',
  'We appreciate that you are interested in our company',
  'after carefully reviewing',
  'I will certainly keep you in mind for future work',
  'your application did not get accepted',
  'we hope that you may consider applying again in the future',
  'your project did not make it to the final round',
  'Unfortunately, I couldn’t fund your application',
  'Unfortunately, your application was not choosen',
  'we had to make many painful decisions',
  'We wish you success in your efforts',
  'Unfortunately, I am writing with the news that yours is not among the applications selected this round',
  'Thank you for allowing us to consider your project for this year',
  'We regret to inform you that we are unable to include'
];

const encouragement = [
  'You are great',
  'Keep going',
  'Do not give up',
  'You are awesome',
  'Courage, dear heart',
  'Embrace uncertainty',
  'This is all part of the way',
  'There is something in you that the world needs',
  'You are way more than enough',
  'You are doing an amazing job at life',
  'You are gold, baby',
  'You are amazing',
  'You are brave',
  'The best revenge is massive success',
  'Never, never, never give up'
]

const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const patterns = wordArray.map(word => new RegExp(word, 'gi'))

export {
  emailPattern,
  patterns,
  encouragement
}
