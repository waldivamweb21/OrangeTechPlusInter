//metodos magicos
<?php
class Endereco{
    private $logradouro;
    private $numero;
    private $cidade;

    public function __construct($a, $b, $c){
        $this->logradouro = $a;
        $this->numero = $b;
        $this->cidade = $c;
    }

    public function __destruct(){
        //var_dump("DESTRUIR");
    }

    public function __toString(){
        return $this->logradouro .", ".$this->numero." - ".$this->cidade;    
    }
}

$seuEndereco = new Endereco("Rua Duarte coelho", "140", "Sao-Paulo" );

//var_dump($seuEndereco);

//unset($seuEndereco);

echo($seuEndereco);