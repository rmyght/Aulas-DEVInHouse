export function somar(a,b)
{
    return a + b;
}

export function somarArray(elementosArray)
{
    let total = 0;

    elementosArray.forEach(element => {
        total += element;
    });
    return total;
}