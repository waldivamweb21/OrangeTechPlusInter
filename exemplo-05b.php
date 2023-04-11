<?php
//Encapsulamento
class Pessoa{ //class com atributos
    public $nome = "Rasmus Lerdorf";
    protected $idade = 48;
    private $senha = "123456";

//enxerga porque é publico e está na mesma classe.
    public function verDados(){ //metodos 
        echo $this->nome . "<br>";
        echo $this->idade . "<br>"; //ref na memoria.
        echo $this->senha . "<br>";
    }
}
        //Herança
class Programador extends Pessoa{ //Enxerga tudo -(menos) o que for private. 
    
    public function verDados(){ //metodos 
       //funcao nativa ver quais os atributos da classe pode acessar.
        echo get_class($this) . "<br>"; //testa e ver que esta vindo da classe programador.

        echo $this->nome . "<br>";                      //
        echo $this->idade . "<br>"; //ref na memoria.   // Agora vai ser chamado esse método.Porquefoi criado dentro de Extends.
        echo $this->senha . "<br>";                     //
 }                              //não consegue acessar o: PRIVATE. Porque nem a Herança como extends não acessa o PRIVATE. 
}
//criando objeto para instanciar(criou a var) da classe.
$objeto = new Programador();

//n precisa echo porque já está chamandolá em cima.
$objeto->verDados(); //invocando o metodo.



?>