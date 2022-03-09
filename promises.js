/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */
function num1(){
    return 1;
}

async function num2(){
    return 2;
}

console.log('num1', num1());
console.log('num2', num2());

// num2().then(result => console.log(result));



/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting(){
    const value = await num2();
    console.log('waiting', value);
}
waiting();



/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForMyPromise(){
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        },1000);
    });
    const result = await promise;
    console.log('my promise is', result);
}
waitForMyPromise();


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!');
        }, 1500);
    }).then(response => console.log('then my other promise is',response));




/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms){
  return new Promise(res => setTimeout(res,ms));
}

function sayHello(){
  console.log("hello");
}

wait(2000)
  .then(() => sayHello());


/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = (random) => new Promise((resolve,
   reject) => {
     if(random > 0.5){
       resolve("Success!!")
     } else {
       reject("Random error");
     }
  });


  // tryRandomPromise(0.2)
  //   .then(res=> console.log(res))
  //   .catch(err => console.log(err));

  for(let i=1; i < 10; i++){
    const random = Math.random();
    wait(2000 + random *1000)
      .then(() => tryRandomPromise(random))
      .then(result =>console.log("random try #",i,result, random))
      .catch(err => console.error("random try #", i, err , random));
  }


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryTryAgain = async(i) => {
  const random = Math.random();

  await wait(3000 + random*1000);

  try{
    const result =await tryRandomPromise(random);
    console.log("random again #", i, result, random)
  }catch(error){
    console.error("random again #", i, error, random)
  }

};

// tryTryAgain(1);
for(let i=1; i<10; i++){
  tryTryAgain(i);
}

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log('END OF PROGRAM');
