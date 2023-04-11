<?php
//Encapsulamento
class Pessoa{ //class com atributos
    public $nome = "Rasmus Lerdorf";
    protected $idade = 48;
    private $senha = "123456";

//encherga porque é publico e está na mesma classe.
    public function verDados(){ //metodos 
        echo $this->nome . "<br>";
        echo $this->idade . "<br>"; //ref na memoria.
        echo $this->senha . "<br>";
    }
}
//criando objeto para instanciar(criou a var) da classe.
$objeto = new Pessoa();
//echo $objeto->nome . "<br>";  //acessando de fora class public. acessa de qualquer lugar.
//echo $objeto->idade . "<br>"; //n acessa fora. so dentro da classe e quem herda, classe filha.
//echo $objeto->senha . "<br>"; //n acessa a classe nem fora e nem herdeiros. 

//n precisa echo porque já está chamandolá em cima.
$objeto->verDados(); //invocando o metodo.



?>