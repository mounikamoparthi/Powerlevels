export class BaseNumber {
   baseNumber: number;
   saiyanNumber: number;
   supersaiyanNumber: number;
   constructor(bnumber: number) {
     this.baseNumber = bnumber;
     this.updatePower();
   }
   updatePower() {
      this.saiyanNumber = 10 * this.baseNumber;
      this.supersaiyanNumber = 90 * this.baseNumber;
   }

}
