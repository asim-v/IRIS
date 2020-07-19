Vue.component('engine-item', {
  template: '#engine-item-self',
  props: ['angle', 'delay', 'speed'] });

new Vue({
  el: '#application',
  data: {
    amount: 8,
    speed: .5 },

  methods: {
    changeAmount(e) {
      this.amount = +e.target.value;
    },
    getSpeed(e) {
      this.speed = 1.6 - +e.target.value;
    } },

  computed: {
    getAngle() {
      return 360 / this.amount;
    },
    getOpacity() {
      return 0.5 - this.speed * 0.2;
    } } });