import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];
    data.push(new bugModel({
         _id:2345678,
         name:"Crash on Load",
         details:"Crashes after 3 seconds",
         steps:"Open application and it will crash",
         versions:"V2.0",
         assigned:"Adarsh",
         creator:"Ayushi",
         priority:1,
         time:"23:10",
    }))
    data.push(new bugModel({
        _id:2345678,
        name:"Wont Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        versions:"V2.0",
        assigned:"Adarsh",
        creator:"Ayushi",
        priority:3,
        time:"23:10",
   }))

   let sorted = data.sort((a,b)=>{return a.priority - b.priority})
   return sorted;
}