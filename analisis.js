const salariosArg = argentina.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista(mitad - 1);
        const personitaMitad2 = lista(mitad);

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista(mitad);
        returnpersonitaMitad;
    }

}

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Arg = medianaSalarios(salariosArgTop10);

console.log ({
    medianaGeneralArg,
    medianaTop10Arg,
});