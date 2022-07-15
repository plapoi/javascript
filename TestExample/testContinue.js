var count = 0;
for (var i = 0; i < 20; i++) {
  if (i == 5) { continue; }
  //If the above condition is true, then the code below will not be executed
  count = count + i;
  console.log(i);
}