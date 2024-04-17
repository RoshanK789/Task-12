setTimeout(()=>
{ 
    const Res=document.getElementById("div");
    
    Res.innerHTML="10";
    setTimeout(()=>
    {
        Res.innerHTML="9";
        setTimeout(()=>
        {
            Res.innerHTML="8";
            setTimeout(()=>
            {
                Res.innerHTML="7";
                setTimeout(()=>
                {
                    Res.innerHTML="6";
                    setTimeout(()=>
                    {
                        Res.innerHTML="5";
                        setTimeout(()=>
                        {
                            Res.innerHTML= "4";
                            setTimeout(()=>
                            {
                                Res.innerHTML="3";
                                setTimeout(()=>
                                {
                                    Res.innerHTML="2";
                                    setTimeout(()=>
                                    {                       
                                        Res.innerHTML="1";
                                        setTimeout(()=>
                                        {
                                            Res.innerHTML="Happy Independence Day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)