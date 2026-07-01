#include <stdio.h>
#include <string.h>

// criando a estrutura do medicamento
struct Medicamento {
    char nome[50];
    int quantidade;
};

int main() {

    // criando a variavel e colocando os dados
    struct Medicamento med;
    strcpy(med.nome, "Paracetamol");
    med.quantidade = 50;

    printf("Medicamento: %s\n", med.nome);
    printf("Quantidade em estoque: %d\n", med.quantidade);

    // criando o ponteiro apontando pro endereco da struct
    struct Medicamento *ptr = &med;

    // atualizando a quantidade pelo ponteiro (sem usar med diretamente)
    ptr->quantidade++;

    printf("\nDepois de atualizar pelo ponteiro:\n");
    printf("Medicamento: %s\n", ptr->nome);
    printf("Quantidade em estoque: %d\n", ptr->quantidade);

    return 0;
}