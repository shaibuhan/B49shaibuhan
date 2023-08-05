console.log("Let's start the timer!!!");

setTimeout(function() {
  console.log("10");

  setTimeout(() => {
    console.log("9");

    setTimeout(() => {
      console.log("8");

      setTimeout(()=>{
        console.log("7");

        setTimeout(()=>{
            console.log("6");

            setTimeout(()=>{
                console.log("5");

                setTimeout(()=>{
                    console.log("4");

                    setTimeout(()=>{
                        console.log("3");

                        setTimeout(()=>{
                            console.log("2");

                            setTimeout(()=>{
                                console.log("1");

                                console.log("Happy Newyear");

                            },1000);
                        },2000);
                    },3000);
                },4000);
            },5000);
        },6000);
      },7000);  
    }, 8000);
  }, 9000);
}, 10000);
