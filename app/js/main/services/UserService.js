class UserService{
  constructor(){
    this.user = "Your favorite user!";
  }
}
angular.module("careeradvice").service("UserService", UserService);
