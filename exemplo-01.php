<?php

class Pessoa{ //Atributos
    public $nome;

//Metodo
public function  falar(){ //Usa o This dentro da classe.
    return "O meu Nome é: ".$this->nome;
 }

}
$Glaucio = new Pessoa(); //Construtor 
$Glaucio-> nome  = "Glaucio Daniel"; //Invocou

echo $Glaucio -> falar(); //Instanciou





?>