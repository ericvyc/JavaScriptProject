var emptyObj = {};
var curso = {
	sigla : "K11",
	nome : "Orientação a objetos em JavaScript"
};

var formacaoJava = {
	cursos : [ {
		sigla : "K11",
		nome : "Orientação a objetos em JavaScript"
	}, {
		sigla : "K12",
		nome : " Desenvolvimento Web com JSF2 e JPA2 "
	}, ]
};

var sigla = "silgaaa";

/*document.writeln(curso.sigla);
document.writeln(curso.nome);

document.writeln(curso.sigla); */
document.writeln(curso["sigla"]);
document.writeln(curso[sigla]);