const clock = $('.clock').FlipClock(3600 * 24 * 3, {
  clockFace: 'DailyCounter',
  countdown: true,
  autoStart: false,
  callbacks: {
    stop: function() {
      $('.message').html('Время прошло');
    },
  },
});

const date = new Date('Dec 31, 2020  24:00:00');
const currentTime = new Date();
const time = (date - currentTime) / 1000;
clock.setTime(time);
clock.start();
