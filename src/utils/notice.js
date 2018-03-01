import { Message } from 'element-ui';

export function $message(type, message, duration=2000) {
  Message({
    showClose: true,
    message: message,
    type,
    duration
  });
}