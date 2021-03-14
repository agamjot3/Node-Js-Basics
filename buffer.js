// Buffers


const buf = Buffer.alloc(4);

console.log(buf);

buf.write('Hey!')

buf[1] = 112 // 112 = p


console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf[3]);
console.log(buf[4]);
console.log(buf[5]);
console.log(buf.toString());

