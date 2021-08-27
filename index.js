const data =  require ('./accounts.json') 



let startingApps = [
   {
      "application": 1,
      "emails": ["a@gmail.com", "b@gmail.com"],
      "name": "A"
   },
   {
      "application": 1,
      "emails": ["c@gmail.com", "d@gmail.com"],
      "name": "C"
   },
   {
      "application": 2,
      "emails": ["a@yahoo.com"],
      "name": "A"
   },
   {
      "application": 3,
      "emails": ["a@gmail.com", "a@yahoo.com"],
      "name": "A"
   }
];

var finalList = [];
startingApps.forEach(x => x.isProcessed = false);

startingApps.forEach(el => {
   if (el.isProcessed) return;


   let appToPush = { applications: [el.application], emails: el.emails, name: el.name };
   el.isProcessed = true;

   let emailArray = [...el.emails];
   while (emailArray.length > 0) {
      let currentEmail = emailArray.pop();
      let matchingApps = startingApps.filter(x => !x.isProcessed && x.emails.includes(currentEmail));
      matchingApps.forEach(match => {
         if (match.isProcessed) return;
         match.isProcessed = true;
         appToPush.applications.push(match.application);
         console.log(appToPush);
         match.emails.forEach(x => appToPush.emails.push(x));
         match.emails.forEach(x => emailArray.push(x));
      });
   };
   console.log('about to push2');
   finalList.push(appToPush);
});

console.log(finalList);