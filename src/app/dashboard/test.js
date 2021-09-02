let characters = [
    {
      "name": "Aang", 
      "ethnicity": "Air Nomad", 
      "nationality": "Southern Air Temple", 
      "bending": [
        "Airbending", 
        "Waterbending", 
        "Earthbending", 
        "Firebending"
      ], 
      "gender": "Male", 
      "year of birth": "12 BG", 
      "year of death": "153 AG", 
      "roles": [
        "Avatar", 
        "Co-founder of the United Republic of Nations", 
        "Air Nomad Culture Teacher", 
        "Airbending instructor"
      ], 
      "aliases": [
        "Twinkle Toes", 
        "Kuzon"
      ], 
      "affiliations": [
        "Air Nomads", 
        "Air Acolytes", 
        "Team Avatar"
      ], 
      "weapons": [
        "Glider Staff"
      ], 
      "fighting styles": [
        "Airbending", 
        "Waterbending (Northern Style)", 
        "Waterbending (Southern Style)", 
        "Earthbending (Chu Gar Praying Mantis Kung Fu)", 
        "Firebending (Dancing Dragon)", 
        "Energybending"
      ]
    }, 
    {
      "name": "Aiwei", 
      "ethnicity": "Earth Kingdom", 
      "nationality": "Earth Kingdom", 
      "bending": [
        "Earthbending"
      ], 
      "gender": "Male", 
      "year of birth": "", 
      "year of death": "", 
      "roles": [
        "Adivisor to Suyin Beifong", 
        "Red Lotus Mole", 
        "Truth Seer"
      ], 
      "aliases": [], 
      "affiliations": [
        "Metal Clan", 
        "Red Lotus"
      ], 
      "weapons": [], 
      "fighting styles": [
        "Earthbending", 
        "MetalBending"
      ]
    }, 
    {
      "name": "Ahnah", 
      "ethnicity": "Water Tribe", 
      "nationality": "Earth Kingdom", 
      "bending": [
        "Waterbending"
      ], 
      "gender": "Female", 
      "year of birth": "", 
      "year of death": "", 
      "roles": [], 
      "aliases": [], 
      "affiliations": [], 
      "weapons": [], 
      "fighting styles": [
        "Waterbending"
      ]
    }
]

// var data = { records : [{ "empid": 1, "fname": "X", "lname": "Y" }, { "empid": 2, "fname": "A", "lname": "Y" }, { "empid": 3, "fname": "B", "lname": "Y" }, { "empid": 4, "fname": "C", "lname": "Y" }, { "empid": 5, "fname": "C", "lname": "Y" }] }
// var empIds = [1,4,5]
let names = ["Aang"];
let filteredArray = characters.filter(function(itm){
  return names.indexOf(itm.name) > -1;
});
console.log(filteredArray);
// console.log("done");

filteredArray = { records : filteredArray };