let detalharEndereco = (endereco) => {
    let [rua, cidade, CEP ] = endereco;
    return `rua: ${rua},  cidade: ${cidade}, CPF: ${CEP}`;
};

console.log(detalharEndereco({rua:"Rua das Flores", ciade:"Porto Alegre", CEP: "90000-000" }));
