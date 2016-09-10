obj = {
  name: "Michael",
  occupation: "Instructor",
  hobbies: [{ name: "Sailing", hours: 5},{ name: "Coding", hours: 50}]
}

for (var idx = 0; idx < obj.hobbies.length; idx++){
  for (var key in obj.hobbies[idx]){
    console.log(key, ":",obj.hobbies[idx][key])
  }
}
