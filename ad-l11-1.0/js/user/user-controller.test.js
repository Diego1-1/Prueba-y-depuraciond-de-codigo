const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
// 1. Prueba para add() que verifique un usuario que no está en la lista
test('add() verifica un usuario que no está en la lista de usuarios', () => {    
    const controller = new UserController();
    const user = new User(1, "Ana", "ana@test.com");
    // Verificar que el usuario no está antes de agregarlo
    expect(controller.getUsers()).not.toContain(user);
    controller.add(user);    
    expect(controller.getUsers()).toContain(user);
});

// 2. Prueba para remove() que verifique un usuario que no está en la lista
test('remove() ignora a un usuario que no está en la lista de usuarios', () => {    
    const controller = new UserController();
    const user1 = new User(1, "Ana", "ana@test.com");
    const user2 = new User(2, "Luis", "luis@test.com");
    
    controller.add(user1);
    controller.remove(user2); // Intentar remover un usuario no agregado
    
    expect(controller.getUsers()).toContain(user1);
    expect(controller.getUsers()).not.toContain(user2);
});

// 3. Pruebas para findByEmail()
test('findByEmail() encuentra el usuario por su email', () => {
    const controller = new UserController();
    const user = new User(3, "Carlos", "carlos@test.com");
    controller.add(user);
    
    expect(controller.findByEmail("carlos@test.com")).toEqual(user);
});

test('findByEmail() devuelve undefined si el email no existe', () => {
    const controller = new UserController();
    expect(controller.findByEmail("noexiste@test.com")).toBeUndefined();
});

// 4. Pruebas para findById()
test('findById() encuentra el usuario por su id', () => {
    const controller = new UserController();
    const user = new User(4, "Maria", "maria@test.com");
    controller.add(user);
    
    expect(controller.findById(4)).toEqual(user);
});

test('findById() devuelve undefined si el id no existe', () => {
    const controller = new UserController();
    expect(controller.findById(99)).toBeUndefined();
});
