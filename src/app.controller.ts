export default function MainCtrl( ) {
  this.date1 = null;
  this.date2 = null;
  this.alertDate = () => {
    alert(`from ${this.date1} to ${this.date2}`);
  };
}
