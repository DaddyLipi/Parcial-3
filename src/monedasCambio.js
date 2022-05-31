function Cambio(a)
{
    let i=0;
    let arrayresultado = [];
    if(a==0)
    {
        return a;
    }
    while(a>0)
    {

        if(a%2!=0)
        {
            a=a-1;
            arrayresultado.push(1);
        }
        else{
            a=a-2;
            arrayresultado.push(2);
        }
        i++;
    }
    return arrayresultado;
}
export default Cambio;