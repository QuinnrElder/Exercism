//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const allAllergies = {
 cats: 128,
 pollen: 64,
 chocolate: 32,
 tomatoes: 16,
 strawberries: 8,
 shellfish: 4,
 peanuts: 2,
 eggs: 1,
}

export class Allergies {
  constructor(number) {
    this.number = number;
    this.allergyList = [];
  }

  list() {
    let num = this.number
    
    const newList = (num) => {
    if(num === 0) {
      return 
    }

    for (const allergy in allAllergies) {
      if(num >= allAllergies[allergy]) {
        if(this.allergyList.includes(allergy)){
          return newList(num - allAllergies[allergy])
        }
        this.allergyList.unshift(allergy)
        return newList(num - allAllergies[allergy])
       }
     }
   }

   newList(num)
   return this.allergyList
  }

  allergicTo(allergy) {
    this.list()
    if(this.allergyList.includes(allergy)) {
      return true
    } else {
      return false
    }
  }
}
