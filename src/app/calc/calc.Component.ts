import { Component } from "@angular/core";


@Component({
    selector: 'calc-root',
    templateUrl: './calc.html',
    styleUrls: ['./calc.css']
})

export class calcComponent{

    tela = '';
    limpa:boolean = false;
    inserir(num){
        if(num === '+' || num === '-' || num === '*' || num === 'C' || num === '=' || num === '/'){
            this.limpa = false;
        }

        if(this.limpa){
            
            document.getElementById('tela').textContent = '';
            this.limpa = false;
        }

        if(this.tela.length<18){
            this.tela = document.getElementById('tela').textContent += num;
        }

        
    }

    resultado(){
        document.getElementById('tela').textContent = eval(this.tela);
        this.limpa = true;
        this.tela = '';
        
    }

    limpar(){
        document.getElementById('tela').textContent = '';
        this.tela = '';
        this.limpa = false;
    }

    delete(){
        var pega = document.getElementById('tela').innerHTML;
        pega = pega.slice(0, -1);
        document.getElementById('tela').textContent = pega;
    }
}