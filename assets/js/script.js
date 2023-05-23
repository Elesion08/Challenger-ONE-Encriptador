//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

const criptografar = document.getElementById("button_criptografar");
const descriptografar = document.getElementById("button_descriptografar");
const copy = document.getElementById("button_copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const menino = document.getElementById("menino");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth")
	
const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Insira seu texto aqui";
	menino.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	menino.classList.remove("ocultar");
	textFinal.placeholder = "Nenhuma mensagem foi encontrada";
	textInfo.classList.remove("ocultar")
	copy.classList.add("bn_ocultar");
	textoInicial.focus();
};

let substituir = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

criptografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < substituir.length; i++) {
				if (newtext.includes(substituir[i][0])) {
					newtext = newtext.replaceAll(substituir[i][0], substituir[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Inserir texto para criptografar");
		reset();
	};
});

descriptografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < substituir.length; i++) {
				if (newtext.includes(substituir[i][1])) {
					newtext = newtext.replaceAll(substituir[i][1], substituir[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Inserir texto para descriptografar");
		reset();
	};
});

copy.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	alert("Texto Copiado");
	reset();
});
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});