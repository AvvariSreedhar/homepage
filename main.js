let indicator = 0;
function info() 
{
    if (indicator === 0) 
    {
        document.querySelector('#insertHTML').innerHTML = 'You may have noticed that there are not many <b>good</b> photos of mine. Alas!!';
        indicator = 1;
    }
    else 
    {
        document.querySelector('#insertHTML').innerHTML = '';
        indicator = 0;
    }
}