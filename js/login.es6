let login = (username , password) => {
  if (username!== "admin" || password !== "radical"){
      console.log("incorrect login");
  }
};
//this is the way to export module at ES6
export {login}