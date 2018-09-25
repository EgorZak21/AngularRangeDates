
import MainController from "./app.controller";
import wrapper from "./components/wrapper";
import main_date from "./components/main-date";
declare var angular: any;
const appModule = angular
  .module("App", ["ngMaterial", "ngMessages"])
  .controller("MainCtrl", MainController)
  .component("mcDates", wrapper) // wrapper for 2nd component ( reasons in main-date.ts )
  .component("datesIn", main_date); // main component
