function convertTemp(temp,i)
{
    /*if(i== "K")
    {
        console.log((273+temp)+"K");
    }
    else if(i=="C")
    {
        console.log((temp-273)+"C");
    }
    */
    i=="K"?console.log((273+temp)+"K"):i=="C"?console.log((temp-273)+"C"):0;
}

convertTemp(308,"C");
convertTemp(35,"K");


