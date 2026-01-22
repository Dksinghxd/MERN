// const userRole = "admin";
// const isAuthenticated = true;
// const userAge = 18;

// if (!isAuthenticated) {
//   console.log("Please login");
// } 
// else if (userRole === "admin") {
//   console.log("Welcome to dashboard");
// } 
// else {
//   console.log("Access denied");
// }


function checkAccess(userRoles, isAuthenticated) {
  if (!isAuthenticated) {
    return "Please login";
  }

  if (userRoles("admin")) {
    return "Welcome to dashboard";
  }

  return "Access denied";
}

const userRoles = ["editor", "admin"];
const isAuthenticated = true;

console.log(checkAccess(userRoles, isAuthenticated));
