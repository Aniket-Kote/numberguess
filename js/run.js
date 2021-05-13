
    let any=Math.floor(Math.random() * 101);
    let counter=1;
    let guessd=0;
    let life=5;
    function guess()
    {       
            if(exampleInput.value == "" || exampleInput.value > 100 )
            {
                show.innerHTML="Enter a number";
            }
            else if(exampleInput.value == any)
            {
                
                show.innerHTML="Congratulations..........";
                alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guessd + " GUESS "); 
                
            }
            else if(exampleInput.value > any)
            {
                guessd++;
                life--;
                show.innerHTML="The number entered is too big.........";
                
            }            
            else if(exampleInput.value < any)
            {
                guessd++;
                life--;
                show.innerHTML="The number entered is too small.......";
                
                
            }
           
            chances.innerHTML="Number of Guess :"+guessd//+" And you have "+life+" left";
            
         
            // lifeover();
            
        
        
        
    }

    // function lifeover()
    // {
        // if(life==0)
        //     {
        //         life.innerHTML="You lost,The correct answer is  :"+any
        //     }
    // }
    

   