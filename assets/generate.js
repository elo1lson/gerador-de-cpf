class Generate {
    static rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    static formataded(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }
    static gerenate(cpf) {
        let total = 0;
        let reverse = cpf.length + 1;

        for (let i of cpf) {
            total += reverse * i;
            reverse--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? digit : 0;
    }
}
var generate = new Generate()

const text = document.querySelector('.main')
const button = document.querySelector('.generate')


button.addEventListener('click', () => {
    
    let baseNumber = Generate.rand()
    baseNumber = String(baseNumber)
    const first = Generate.gerenate(baseNumber)

    const second = Generate.gerenate(baseNumber + String(first))
    const finalCpf = baseNumber + String(first) + String(second)
 
    text.innerHTML = Generate.formataded(finalCpf)
    text.classList.add('cpf')
})