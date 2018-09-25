export default {
  bindings: {
    dateFrom: "=",
    dateTo: "=",
    mcChange: "&"
  },
  template: `
  <dates-in from='$ctrl.dateFrom' to='$ctrl.dateTo' date-from='$ctrl.dateFrom' date-to='$ctrl.dateTo' mc-change="$ctrl.mcChange()"></dates-in>
 `, //  send one value  to main component two times
  controller() {

  }
};
