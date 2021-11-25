users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

function userLanguages (users){
    let languagesList=[];
    let string="";
    for (u=0;u<=users.length-1;u++){
        // string="";
        languagesList=[];

        for (lg=0;lg<=users[u].languages.length-1;lg++){
        // console.log(users[u].languages[lg]);
        languagesList.push( users[u].languages[lg]);
        
        }
        // console.log(languagesList);
        string= languagesList.join(' ,');
        console.log(users[u].fname + " "+ users[u].lname+ " knows "+ string);



    }
   


}
userLanguages(users);

// var myData = JSON.parse(employees);

// Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL. 
// Winnie the Pooh knows Python, Swift, and Java. 
// Arthur Dent knows JavaScript, HTML, and Go.