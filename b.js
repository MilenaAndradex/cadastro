function mask_date(){
    var n_char = document.getElementById("txtdata").value.length;
    if (n_char == 2){
        document.getElementById("txtdata").value = document.getElementById("txtdata").value + "/";
    } else if (n_char == 5) {
        document.getElementById("txtdata").value = document.getElementById("txtdata").value + "/";
    }
   }

function mask_cep(){
    var n_char = document.getElementById("txtcep").value.length;
    if (n_char == 5){
        document.getElementById("txtcep").value = document.getElementById("txtcep").value + "-";
    } 
}

function mask_tel(){
    var n_char = document.getElementById("txttel").value.length;
    if (n_char == 2){
        document.getElementById("txttel").value = "(" + document.getElementById("txttel").value + ")";
    }
}
function mask_cpf(){
    var n_char = document.getElementById("txtcpf").value.length;
    if (n_char == 3){
        document.getElementById("txtcpf").value = document.getElementById("txtcpf").value + "."; 
    } else if (n_char == 7){
        document.getElementById("txtcpf").value = document.getElementById("txtcpf").value + ".";
    } else if (n_char == 11){
        document.getElementById("txtcpf").value = document.getElementById("txtcpf").value + "-";
    }
}