const throttle = (fn, delay) => {
  let lastCall = 0;
  return function (...agrs) {
    let now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...agrs);
  };
};

const chatMsg = (msg) => {
  console.log(msg);
};

const chatMsgThrottle = throttle(chatMsg, 6000);
chatMsgThrottle("hi");
chatMsgThrottle("hiiiiiii");
chatMsgThrottle("kaha ho");
