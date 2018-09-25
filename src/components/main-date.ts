import * as moment  from "moment";
export default {
  templateUrl: "component.html",
  bindings: {
    mcChange: "&",
    dateFrom: "=",
    dateTo: "=",
    from: "<",
    to: "<" // getting one value two times. Reasons: track the values changes (with from:'<") and modify them out the scope(with dateFrom: '-'
  },
  controller: ["$timeout", function ($timeout: any){
    this.alert = () => $timeout( () => this.mcChange()(), 100);
    this.yesterday = (x: number) => {
      this.dateFrom = moment().subtract(x, "days").format("YYYY-MM-DD");
      this.inputFrom = new Date(+moment().subtract(x, "days").format("x"));
      this.dateTo = moment().format("YYYY-MM-DD");
      this.inputTo = new Date(+moment().format("x"));
      this.alert();
    };
    this.month = () => {
      this.dateTo = moment().format("YYYY-MM-DD");
      this.inputTo = new Date(+moment().format("x"));
      let m = this.dateTo.split("-");
      if ( m[1] === 0 ) {
        m[1] = 12;
        m[0] = m[0] - 1;
      }else
        m[1] = m[1] - 1;
      m[0] = `${m[0]}`;
      m[1] = `${m[1]}`;
      m[1] = `${( m[1].length > 1 ) ? "" : "0" }${m[1]}`;
      m[2] = `${m[2]}`;
      m[2] = `${ ( m[2].length > 1) ?  "" : "0" }${m[2]}`;
      this.dateFrom = m.join("-");
      this.inputFrom = new Date(+moment(m.join("-").replace(/-/g, ""), "YYYYMMDD").format("x"));
      this.alert();
    };
    this.all = (x: number) => {
      this.dateFrom = null;
      this.inputFrom = null;
      this.dateTo = null;
      this.inputTo = null;
      this.alert();
    };
    this.setFrom = () => {
      this.dateFrom = moment(this.inputFrom).format("YYYY-MM-DD");
      this.alert();
    };
    this.setTo = () => {
      this.dateTo = moment(this.inputTo).format("YYYY-MM-DD");
      this.alert();
    };
    this.inputFrom = null;
    this.inputTo = null;
    this.$onChanges = () => {
      if ( (this.dateFrom) ? this.dateFrom.length >= 10 : 0 ) {
        let m = this.dateFrom;
        let mom = moment( m.trim().replace(/-/g, ""), "YYYYMMDD").format("x");
        if ( mom !== "Invalid date" ) {
          if ( this.inputTo < new Date(+mom) ) {
            this.dateTo = null;
            this.inputTo = null;
          }else
            this.inputFrom = new Date(+mom);
        }else {
          this.dateFrom = null;
          this.inputFrom = null;
        }
      }
      if ( (this.dateTo) ? this.dateTo.length >= 10 : 0 ) {
        let m = this.dateTo;
        let mom = moment(m.trim().replace(/-/g, ""), "YYYYMMDD").format("x");
        if (mom !== "Invalid date") {
          if (new Date(+mom) < this.inputFrom) {
            this.dateTo = null;
            this.inputTo = null;
          }else
            this.inputTo = new Date(+mom);
        }else {
          this.dateTo = null;
          this.inputTo = null;
        }
      }
    };
  }]
};
