function openModal() {
    document.getElementById('modal').style.display = 'grid';
}

function closeModal() {
document.getElementById('modal').style.display = 'none';
}

function Save_datas(){

    let input_nome = document.getElementById("Nome").value
    let input_Email = document.getElementById("Email").value
    let input_CPF = document.getElementById("CPF").value
    let input_telefone = document.getElementById("telefone").value
    let input_Senha = document.getElementById("Senha").value

    localStorage.setItem("Nome", input_nome)
    localStorage.setItem("Email", input_Email)
    localStorage.setItem("CPF", input_CPF)
    localStorage.setItem("telefone", input_telefone)
    localStorage.setItem("Senha", input_Senha)
    
    window.location.href = "perfil.html"
}

function read_datas(){
    let input_nome = localStorage.getItem("Nome")
    let input_Email = localStorage.getItem("Email")
    let input_CPF = localStorage.getItem("CPF")
    let input_telefone = localStorage.getItem("telefone")
    let input_Senha = localStorage.getItem("Senha")

    document.getElementById("ShowNome").innerHTML = input_nome
    document.getElementById("ShowEmail").innerHTML = input_Email
    document.getElementById("ShowCPF").innerHTML = input_CPF
    document.getElementById("ShowTelefone").innerHTML = input_telefone
    document.getElementById("ShowSenha").innerHTML = input_Senha

}
function mascara_telefone(){
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
            mascara_telefone()
        }
        
    }
    
    if (tel_formatado[4]!=" ")
    {
        if(tel_formatado[4]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,4)+" "+tel_formatado[4]
        }

    }
    
    if (tel_formatado[6]!=" ")
    {
        if(tel_formatado[6]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,6)+" "+tel_formatado[6]
        }
    }


    if (tel_formatado[11]!="-")
    {
        if(tel_formatado[11]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,11)+"-"+tel_formatado[11]
        }
    }
}
function mascara_CPF(){
    var CPF_formatado = document.getElementById("CPF").value
    if (CPF_formatado[3]!=".")
    {
        if (CPF_formatado[3]!=undefined)
        {
            document.getElementById("CPF").value=CPF_formatado.slice(0,3)+"."+CPF_formatado[3];
        }
    }

    if (CPF_formatado[7]!=".")
    {
        if(CPF_formatado[7]!=undefined)
        {
            document.getElementById("CPF").value=CPF_formatado.slice(0,7)+"."+CPF_formatado[7]
        }
    }
    
    if (CPF_formatado[11]!="-")
    {
        if(CPF_formatado[11]!=undefined)
        {
            document.getElementById("CPF").value=CPF_formatado.slice(0,11)+"-"+CPF_formatado[11]
        }
    }

}