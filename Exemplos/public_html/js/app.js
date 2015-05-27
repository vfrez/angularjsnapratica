var usuario = angular.module('usuarios', ['ngRoute']);

usuario.config(function($routeProvider){
  
  $routeProvider
    .when('/cadastrar', {
      controller: "CadastroCtrl",
      templateUrl: "views/cadastrar.html"
    })
    .when('/listar', {
      controller: "ListarCtrl",
      templateUrl: "views/listar.html"
    })
    .when('/home', {
      templateUrl: "views/home.html"
    })
    .otherwise('/home');
  
});

usuario.controller('ListarCtrl', function($scope, $rootScope){
  
  $scope.getStatus = function(status){
    if(status){
      return "Ativo";
    }else{
      return "Inativo";
    }
  }
  
});

usuario.controller('CadastroCtrl', function($scope, $rootScope){
  $scope.user = {};
  
  $scope.save = function(){
    
    $scope.erros = [];
    
    if(!$scope.user.name){
      $scope.erros.push("Informe o nome");
    }
    
    if(!$scope.user.email){
      $scope.erros.push("Informe o e-mail");
    }
    
    if($scope.erros.length == 0){
      if($rootScope.usuarios){
        $rootScope.usuarios.push($scope.user);
      }else{
        $rootScope.usuarios = [];
        $rootScope.usuarios.push($scope.user);
      }
      $scope.user = {};
    }
  }
  
});











var app = angular.module('jornada', []);

app.controller('HomeCtrl', function($scope){
  $scope.mostrar = true;
  
  $scope.classes = "grande";
  
  $scope.numeros = [10, 20, 30, 40];
  
  $scope.usuarios = [
    {id: 1, nome: "Henrique"}, 
    {id: 2, nome: "Maria"}, 
    {id: 3, nome: "Goku"},
    {id: 4, nome: "José"}
  ];
  
  $scope.salvar = function(){
    alert('Oláaaaaa');
  }
  
})