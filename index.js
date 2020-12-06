let fs=require('fs')
let path=require('path')

let pasta="C:/Users/Soucer/Desktop"
let arq=[]


function Arquivos(caminho){   


    let files=fs.readdirSync(caminho)

        for( let x of files){


         if(fs.statSync(path.resolve(caminho,x)).isDirectory()){

            Arquivos(path.resolve(caminho,x))


         }else{

            arq.push(path.resolve(caminho,x))
         }


        }        

}


Arquivos(pasta)

console.log(arq.length)