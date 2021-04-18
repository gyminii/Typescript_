// watchmode is used because it is tiring having to make changes => save => recompile => reload
// So it 'watches" for the file to make changes then it compiles it automatically. 
// tsc app.ts --watch or --w
// To watch for the whole project
// tsc --watch or --w

console.log('Time to get started...');
console.log('watchmode enabled');

// To compile and run the whole project, not just a single file, we have to configure this once.
// tsc --init 