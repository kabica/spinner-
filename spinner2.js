// process.stdout.write('hello from spinner1.js... \r4\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

let spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ']
for(let i = 0; i < spinner.length; i++) {
	setTimeout(() => {
		process.stdout.write(spinner[i])
	}, i * 200)
}
console.log('\n');