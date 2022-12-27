# projeto-costs
 Controlado de Custos usando REACT

Gerenciador de Projetos, aonde vamos poder inserir nossos projetos nele ele vai usar uma API e eles vão ficar salvos em um banco de dados.Você vai poder inserir o nome do projeto, o orçamento e a categoria vai ter flash mensseges pode ser feita a inclusão,edição e a exclusão de projetos.

Dentro de cada projeto poderemos adicionar um serviços e o custo de cada serviço para aquele projeto não podendo ultrapassar o valor do orçamento. Exemplo: Se eu tenho um valor de 10.000 de orçamento em um projeto. Não vou poder contratar um serviço de 10.500 ou dois de 6.000.

Vamos utilizar Hooks do React Router, State ,Css ,React Icons

Fiz a intalação das seguintes dependencias;
	*json-server: responsavel pelo backEnd Fake para que eu possa fazer requisições com API
	resgatar,enviar e atualizar dados

	*react-icons 
	*react-router-dom 
	*uuid:Vai criar Ids quando necessário em nossos projetos cada projeto vai ter um
	Id unico como em bancos de dados relacionais
